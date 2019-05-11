import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'tna-events-review',
    templateUrl: './events-review.component.html',
    styleUrls: ['./events-review.component.scss']
})
export class EventsReviewComponent implements OnInit {
    @Input() data: any;
    @Input() navigateTo: any;
    @Input() eventType: any = '';

    constructor(private router: Router) { }

    ngOnInit() {
    }

    navigate() {
        this.router.navigate(['events/']);
    }

    getTextWithNewLine(text) {
        if (this.eventType !== 'activities') {
            return text.substr(0, 150).replace(/\n/g, '<br />') + '.....';

        }
        return text.substr(0, 120).replace(/\n/g, '<br />');
    }
}
