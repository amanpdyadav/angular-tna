import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';


@Injectable()
export class FirebaseService {
    private _fb;
    private _fbAuth: firebase.auth.Auth;
    private _fbDatabase: firebase.database.Database;
    private _fbStorage: firebase.storage.Storage;

    constructor() {
        this._fb = !firebase.apps.length ? firebase.initializeApp(environment.firebaseConfig) : firebase.app();
        this._fbAuth = this._fb.auth();
        this._fbDatabase = this._fb.database();
        this._fbStorage = this._fb.storage();
    }

    get fb() { return this._fb; }

    get auth(): firebase.auth.Auth { return this._fbAuth; }

    get database(): firebase.database.Database { return this._fbDatabase; }

    get storage(): firebase.storage.Storage { return this._fbStorage; }
}
