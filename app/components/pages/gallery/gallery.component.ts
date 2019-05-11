import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'tna-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
    private _dataSubscription: any;

    constructor(private dataService: DataService) { }

    ngOnInit() { }

    ngOnDestroy() { this._dataSubscription.unsubscribe(); }
}
