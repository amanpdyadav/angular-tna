import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { FirebaseService } from './firebase.service';
import * as firebase from 'firebase';


@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router,
                private fbService: FirebaseService) {
    }

    get currentUser(): firebase.User {
        return this.fbService.auth.currentUser;
    }

    signInWithEmailPassword(email: string, password: string): Promise<any> {
        return this.fbService.auth.signInWithEmailAndPassword(email, password);
    }

    signInWithProvider(): Promise<any> {
        const google = new firebase.auth.GoogleAuthProvider();
        return this.fbService.auth.signInWithPopup(google);
    }

    signUpWithEmailPassword(email, password): Promise<any> {
        const secondaryApp = firebase.initializeApp(environment.firebaseConfig, 'Secondary' + email);
        return secondaryApp.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                secondaryApp.auth().signOut().then(r => secondaryApp.delete());
                return res;
            }).catch(err => {
                secondaryApp.auth().signOut().then(r => secondaryApp.delete());
                console.log(err);
                return Promise.reject(err.message);
            });
    }

    passwordResetEmail(email) {
        return this.fbService.auth.sendPasswordResetEmail(email);
    }

    signOut() {
        this.router.navigate(['home']);
        return this.fbService.auth.signOut();
    }

    canActivate() {
        if (!this.currentUser) {
            this.router.navigate(['home/login']);
        }
        return !!this.currentUser;
    }
}
