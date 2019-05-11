import { DataSource } from '@angular/cdk/table';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MdPaginator, MdSort } from '@angular/material';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { TnaEvent, TnaEventAttendee, TnaMember } from '../../models';
import { DataService } from '../../services/data.service';
import { MdDialog } from '@angular/material';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
    selector: 'tna-events-table',
    templateUrl: './events-table.component.html',
    styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit, OnDestroy {
    @ViewChild(MdSort) sort: MdSort;
    @ViewChild('filter') filter: ElementRef;
    @ViewChild(MdPaginator) paginator: MdPaginator;

    userProfile: TnaMember;
    displayedColumns = ['name', 'families', 'adults', 'kids', 'vegetarians', 'total', 'paid'];
    displayedTitles = ['Name', 'families', 'adults', 'Kids', 'vegetarians', 'total', 'paid'];
    dataSource: CustomDataSource | null;

    eventsWithRegistration: Array<TnaEvent> = [];
    events: Array<TnaEvent> = [];
    private _dataSubscription: any;

    data = [];
    eventStatus = {
        adults: 0,
        kids: 0,
        family: 0,
        total: 0
    };

    constructor(private dataService: DataService, public mdDialog: MdDialog) {
    }

    ngOnInit() {
        this.events = this.dataService.events.value;
        this._dataSubscription = this.dataService.eventAttendees.subscribe(res => {
            this.userProfile = this.dataService.currentUser.value;
            const data = res.reverse();
            this.eventsWithRegistration = this.events.filter((evt: TnaEvent) => evt.registrationRequired)
                .sort((a: TnaEvent, b: TnaEvent) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
            this.data = data;
            this.getEventStatus(this.data);
            this.dataSource = new CustomDataSource({
                data: data,
                dataChange: new BehaviorSubject<any>(data)
            }, this.sort, this.paginator);

            Observable.fromEvent(this.filter.nativeElement, 'keyup')
                .debounceTime(150)
                .distinctUntilChanged()
                .subscribe(() => {
                    if (!this.dataSource) {
                        return;
                    }
                    this.dataSource.filter = this.filter.nativeElement.value;
                    this.data = this.dataSource.filteredData;
                    this.getEventStatus(this.data);
                });
        });
    }

    ngOnDestroy() { this._dataSubscription.unsubscribe(); }

    getEventName(owner) {
        const event = this.events.find((evt: TnaEvent) => evt.uid === owner);
        return event && event.title ? event.title : '';
    }

    onEventsSelection(value) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.eventFilter = value;
        this.data = this.dataSource.filteredData;
        this.getEventStatus(this.data);
    }

    getEventStatus(data) {
        this.eventStatus.family = 0;
        this.eventStatus.kids = 0;
        this.eventStatus.adults = 0;
        this.eventStatus.total = 0.0;
        data.map((d: TnaEventAttendee) => {
            this.eventStatus.adults += (+d.adults);
            this.eventStatus.family += (+d.families);
            this.eventStatus.kids += (+d.kids);
            this.eventStatus.total += (+d.total);
        });
    }

    confirmEventPayment(id) {
        const dialogRef = this.mdDialog.open(ConfirmationDialog, {
            data: {
                title: 'Confirm event payment',
                content: 'Confirm if this member has paid for the event?'
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'Ok') {
                this.dataService.confirmEventPayment(id)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        });
    }
}


export class CustomDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    _eventChange = new BehaviorSubject<any>('');
    _filteredData: any = [];

    get filteredData() { return this._filteredData; }

    get filter(): string { return this._filterChange.value; }

    get eventFilter(): string { return this._eventChange.value; }

    set filter(filter: string) { this._filterChange.next(filter); }

    set eventFilter(dates: string) { this._eventChange.next(dates); }

    constructor(private _database, private _sort: MdSort, private _paginator: MdPaginator) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<TnaEventAttendee[]> {
        const displayDataChanges = [
            this._database.dataChange,
            this._sort.mdSortChange,
            this._paginator.page,
            this._filterChange,
            this._eventChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            // Grab the page's slice of data.
            const data = this._database.data.slice();
            const filterData = this.getFilteredDataByEvent(this.getFilteredData(data));

            this._filteredData = JSON.parse(JSON.stringify(filterData));

            return this.getPaginatedData(this.getSortedData(filterData));
        });
    }

    disconnect() { }

    /** Returns a filtered copy of the database data. */
    getFilteredDataByEvent(data) {
        if (!this.eventFilter) {
            return data;
        }
        return data.filter((item) => {
            return (item.owner).toString().toLowerCase() === this.eventFilter.toString().toLowerCase();
        });
    }

    /** Returns a filtered copy of the database data. */
    getFilteredData(data) {
        return data.filter((item) => {
            const searchStr = (item.name || '').toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
    }

    /** Returns a paginated copy of the database data. */
    getPaginatedData(data): TnaEventAttendee[] {
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        return data.splice(startIndex, this._paginator.pageSize);
    }

    /** Returns a sorted copy of the database data. */
    getSortedData(data): TnaEventAttendee[] {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }

        return data.sort((a: TnaEventAttendee, b: TnaEventAttendee) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._sort.active) {
                case 'name':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'families':
                    [propertyA, propertyB] = [a.families, b.families];
                    break;
                case 'adults':
                    [propertyA, propertyB] = [a.adults, b.adults];
                    break;
                case 'kids':
                    [propertyA, propertyB] = [a.kids, b.kids];
                    break;
                case 'vegetarians':
                    [propertyA, propertyB] = [a.vegetarians, b.vegetarians];
                    break;
                case 'paid':
                    [propertyA, propertyB] = [a.paid, b.paid];
                    break;
                case 'total':
                    [propertyA, propertyB] = [a.total, b.total];
                    break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}
