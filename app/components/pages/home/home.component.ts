import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { AuthService } from '../../../services/auth.service';
import { MdSnackBar } from '@angular/material';
import { DialogService } from '../../../services/dialog.service';
import { SignupComponent } from '../../signup/signup.component';

@Component({
    selector: 'tna-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    data = {
        events: [],
        activities: [
            {
                id: 1,
                type: 'recursive',
                datetime: 'Every Saturday',
                title: 'Table Tennis(Saturday)',
                description: 'Nisse Kavon katu 3, 20610 \n 14:00 - 16:00'
            }
        ]
    };
    private _eventSubscription: any;

    constructor(private snackBar: MdSnackBar,
                private router: Router,
                private dataService: DataService,
                private activatedRoute: ActivatedRoute,
                private dialogService: DialogService,
                public authService: AuthService,
                private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
        this._eventSubscription = this.dataService.events.subscribe(res => {
            this.data.events = res.filter(evt => new Date().valueOf() < new Date(evt.date).valueOf());
        });
    }

    ngOnDestroy() {
        if (this._eventSubscription) {
            this._eventSubscription.unsubscribe();
        }
    }

    openSignUpDialog() { this.dialogService.open(this.viewContainerRef, SignupComponent); }
}
