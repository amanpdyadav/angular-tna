import { Component, Input, OnInit } from '@angular/core';
import { TnaEvent } from '../../models';

@Component({
    selector: 'tna-event-card',
    templateUrl: './tna-event-card.component.html',
    styleUrls: ['./tna-event-card.component.scss']
})
export class TnaEventCardComponent implements OnInit {
    @Input() event: TnaEvent;

    constructor() { }

    ngOnInit() {
    }

}
