import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { FirebaseService } from './services/firebase.service';
import { DialogService } from './services/dialog.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TnaMember } from './models';


@Component({
    selector: 'tna-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    tabHeader = {
        title: 'Turku Nepal Associations Ry',
        logo: 'TNA'
    };

    user: TnaMember;
    state = {
        tabs: ['home', 'events', 'account', 'members', 'contact'],
        activetab: null
    };

    private _dataSubscription: any;

    constructor(private dataService: DataService,
                private authService: AuthService,
                private firebaseService: FirebaseService,
                private dialogService: DialogService,
                private viewContainerRef: ViewContainerRef) { }

    ngOnInit() {
        this._dataSubscription = this.dataService.currentUser.subscribe(res => { this.user = res; });
    }

    ngOnDestroy() {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
        }
    }

    setActiveTab(index) {
        this.state.activetab = this.state.tabs[index];
    }

    openLoginDialog() {
        this.dialogService.open(this.viewContainerRef, LoginComponent);
    }

    logout() {
        this.authService.signOut();
    }

    openSignUpDialog() {
        this.dialogService.open(this.viewContainerRef, SignupComponent);
    }
}

