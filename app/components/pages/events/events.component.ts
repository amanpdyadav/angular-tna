import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { DialogService } from '../../../services/dialog.service';
import { EventRegistrationComponent } from '../../event-registration/event-registration.component';
import { EventCreationComponent } from '../../event-creation/event-creation.component';
import { TnaEvent, TnaMember } from '../../../models';

@Component({
    selector: 'tna-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
    dashainImg = 'https://firebasestorage.googleapis.com/v0/b/turkunepal-21097.appspot.com/o/tna%2Fassets%2Fdashain.jpg?alt=media&token=812b8432-9d07-4685-8fd3-27c2e2895fcd';
    user: TnaMember;
    events: Array<TnaEvent> = [];
    selectedEvent: TnaEvent;
    registrationOpen = false;
    private _dataSubscription: any;
    private _userSubscription: any;

    constructor(private dataService: DataService,
                private viewContainerRef: ViewContainerRef,
                private dialogService: DialogService) { }

    ngOnInit() {
        this._userSubscription = this.dataService.currentUser.subscribe(res => this.user = res);

        this._dataSubscription = this.dataService.events.subscribe(res => {
            if (res.length > 0) {
                this.events = res.sort((a: TnaEvent, b: TnaEvent) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
                const pastEvents = this.events.filter((evt: TnaEvent) => new Date(evt.date).valueOf() > new Date().valueOf());
                this.selectedEvent = pastEvents.length > 0 ? pastEvents[pastEvents.length - 1] : this.events[0];
                res.forEach(evt => {
                    if (evt.title.toLowerCase().indexOf('dashain') !== -1) {
                        evt['image'] = this.dashainImg;
                    }
                });
                this.setRegistrationOpen(this.selectedEvent);
            } else {
                this.events = [];
                this.selectedEvent = null;
            }
        });
    }

    setRegistrationOpen(evt: TnaEvent) {
        if (evt.expiryDate) {
            this.registrationOpen = new Date(evt.expiryDate).valueOf() > new Date().valueOf();
        }
    }

    ngOnDestroy() {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
        }
        if (this._userSubscription) {
            this._userSubscription.unsubscribe();
        }
    }

    registerForEvent() {
        this.dialogService.open(this.viewContainerRef, EventRegistrationComponent, this.selectedEvent);
    }

    createEvent() {
        this.dialogService.open(this.viewContainerRef, EventCreationComponent);
    }

    editEvent() {
        this.dialogService.open(this.viewContainerRef, EventCreationComponent, this.selectedEvent);
    }
}
