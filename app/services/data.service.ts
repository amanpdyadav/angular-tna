import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FirebaseService } from './firebase.service';
import { getArrayFromObject } from '../models/utility';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { TnaAccount, TnaEvent, TnaEventAttendee, TnaMember } from '../models';

@Injectable()
export class DataService {
    db: firebase.database.Database = this.fbService.database;
    storage: firebase.storage.Storage = this.fbService.storage;

    events: BehaviorSubject<Array<TnaEvent>> = new BehaviorSubject<Array<TnaEvent>>([]);
    accounts: BehaviorSubject<Array<TnaAccount>> = new BehaviorSubject<Array<TnaAccount>>([]);
    eventAttendees: BehaviorSubject<Array<TnaEventAttendee>> = new BehaviorSubject<Array<TnaEventAttendee>>([]);

    users: BehaviorSubject<Array<TnaMember>> = new BehaviorSubject<Array<TnaMember>>([]);
    currentUser: BehaviorSubject<TnaMember> = new BehaviorSubject<TnaMember>(null);


    constructor(private fbService: FirebaseService,
                private http: HttpClient) {
        this._getData();

        this.fbService.auth.onAuthStateChanged((user: firebase.User) => {
            if (!user) {
                this.currentUser.next(null);
            } else if (!this.users.value || this.users.value.length === 0) {
                this.db.ref('users')
                    .orderByKey().equalTo(user.uid)
                    .once('value').then(res => this.currentUser.next(getArrayFromObject(res.val())[0]));
            } else {
                this.currentUser.next(this.users.value.find((u: TnaMember) => u.uid === user.uid));
            }
        });
    }

    private _getData() {
        this.db.ref('/').on('value', (res) => {
            const data = res.val();
            Object.keys(data).forEach(k => data[k] = getArrayFromObject(data[k]));

            ['eventAttendees', 'events', 'users', 'accounts'].forEach(k => {
                if (this[k]) {
                    this[k].next(data[k]);
                }
            });
            this.updateCurrentUser();
        });
    }

    updateCurrentUser() {
        if (this.fbService.auth.currentUser) {
            this.currentUser.next(this.users.value.find((u: TnaMember) => u.uid === this.fbService.auth.currentUser.uid));
        }
    }

    addEvent(event) {
        return this.db.ref('events/' + this.cleanId(event.title.slice(0, 15)) + event.date).set(event);
    }

    deleteEvent(eventId) {
        return this.db.ref('events/' + eventId).remove();
    }

    updateEvent(evt_id, event: TnaEvent) {
        if (event.uid) { delete event['uid']; }
        return this.db.ref('events/' + evt_id).update(event);
    }

    confirmMembershipPayment(mem_id) {
        return this.db.ref('users/' + mem_id + '/membershipPaid').update({ 2018: true });
    }

    confirmEventPayment(evt_id) {
        return this.db.ref('eventAttendees/' + evt_id).update({ paid: true });
    }

    registerForEvent(evt_id, data) {
        const userRegistered = this.eventAttendees.value.find(att => att.owner === evt_id && att.email === data.email);
        if (userRegistered) {
            return Promise.resolve({ error: 'User already registered for this event' });
        } else {
            return this.db.ref('eventAttendees/' + evt_id + (this.cleanId(data.name || '')) + new Date().valueOf()).set(data);
        }
    }

    writeUserToDb(uid, userData: TnaMember) {
        if (userData.uid) { delete userData['uid']; }
        return this.db.ref('users/' + uid).set(userData);
    }

    uploadAvatar(file: File | Blob): Promise<any> {
        if (this.currentUser.value.imagePathInStore) {
            return this.storage.ref(this.currentUser.value.imagePathInStore).delete()
                .then(() => this.uploadAndUpdateURL(file))
                .catch(err => this.uploadAndUpdateURL(file));
        } else {
            return this.uploadAndUpdateURL(file);
        }
    }

    uploadAndUpdateURL(file): Promise<any> {
        return new Promise((resolve, reject) => {
            const metadata = { contentType: 'image/jpeg' };
            const uploadTask = this.storage.ref('images/' + this.currentUser.value.uid + '/avatar/')
                .child('' + new Date().valueOf() + file['name']).put(file, metadata);

            uploadTask.on('state_changed',
                (snapshot: any) => console.log('Upload is in progress.'),
                (error: any) => console.log(error),
                () => {
                    this.db.ref('users/' + this.currentUser.value.uid).update({
                        profilePicture: uploadTask.snapshot.downloadURL,
                        imagePathInStore: uploadTask.snapshot.metadata.fullPath
                    })
                        .then((res) => { resolve(uploadTask.snapshot); })
                        .catch(err => reject(err));
                }
            );
        });
    }

    // Get rid of invalid character from keys which firebase doesnt support.
    cleanId(id) {
        return id.replace(/\./g, '').replace(/\$/g, '').replace(/\[/g, '').replace(/\]/g, '').replace(/#/g, '');
    }

    sendMessage(data) {
        const url = 'https://us-central1-turkunepal-21097.cloudfunctions.net/contact';
        return this.http.put(url, data).toPromise();
    }


    testFCMTOKENS() {
        const mess = this.fbService.fb.messaging();
        mess.requestPermission()
            .then(() => {
                console.log('Notification permission granted.');
                return mess.getToken();
            })
            .then(token => {
                console.log(token, navigator.userAgent);
                this.db.ref('fcmTokens/' + this.cleanId(navigator.platform.slice(0, 20))).set(token);

            })
            .catch((err) => {
                console.log('Unable to get permission to notify.', err);
            });
    }
}
