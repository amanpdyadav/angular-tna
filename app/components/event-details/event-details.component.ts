import { Component, Input, OnInit } from '@angular/core';
import { TnaEvent, TnaMember } from '../../models';

@Component({
    selector: 'tna-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    @Input() selectedEvent: TnaEvent;
    @Input() user: TnaMember;
    today = new Date();

    constructor() { }

    ngOnInit() {}

    getValueOf(date) {
        if (date) {
            return new Date(date).valueOf();
        }
    }
}
