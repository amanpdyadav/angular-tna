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
import { TnaAccount, TnaEvent, TnaEventAttendee } from '../../models';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'tna-account-table',
    templateUrl: './account-table.component.html',
    styleUrls: ['./account-table.component.scss']
})
export class AccountTableComponent implements OnInit, OnDestroy {
    @ViewChild(MdSort) sort: MdSort;
    @ViewChild('filter') filter: ElementRef;
    @ViewChild(MdPaginator) paginator: MdPaginator;

    private _dataSubscription: any;

    displayedColumns = ['date', 'beneficiary', 'amount'];
    dataSource: CustomDataSource | null;
    dates = {
        start: null,
        end: null
    };
    data: any = [];
    accountStatus = {
        paid: 0,
        received: 0
    };

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this._dataSubscription = this.dataService.accounts.subscribe(res => {
            const data = (res || []).map((acc: TnaAccount) => {
                if (acc.amount && acc.amount.toString().substr(-1) === '-') {
                    acc['paid'] = acc.amount;
                } else {
                    acc['received'] = acc.amount;
                }
                return acc;
            });

            this.data = data.sort((a: TnaAccount, b: TnaAccount) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
            this.getAccountStatus(this.data);
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
                    this.getAccountStatus(this.data);
                });
        });
    }

    ngOnDestroy() { this._dataSubscription.unsubscribe(); }

    onDateChanged(date) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.dateFilter = this.dates;
        this.data = this.dataSource.filteredData;
        this.getAccountStatus(this.data);
    }

    getAccountStatus(data) {
        this.accountStatus.paid = 0;
        this.accountStatus.received = 0;
        (data || []).map((d: TnaAccount) => {
            this.accountStatus.paid += d.amount < 0 ? d.amount : 0;
            this.accountStatus.received += d.amount > 0 ? d.amount : 0;
        });
    }
}


export class CustomDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    _dateChange = new BehaviorSubject<any>({
        start: null,
        end: null
    });
    _filteredData = 0;

    get filteredData() { return this._filteredData; }

    get filter(): string { return this._filterChange.value; }

    get dateFilter(): Object { return this._dateChange.value; }

    set filter(filter: string) { this._filterChange.next(filter); }

    set dateFilter(dates: Object) { this._dateChange.next(dates); }

    constructor(private _database, private _sort: MdSort, private _paginator: MdPaginator) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<TnaAccount[]> {
        const displayDataChanges = [
            this._database.dataChange,
            this._sort.mdSortChange,
            this._paginator.page,
            this._filterChange,
            this._dateChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            // Grab the page's slice of data.
            const data = this._database.data.slice();
            const filterData = this.getFilteredDataByDate(this.getFilteredData(data));

            this._filteredData = JSON.parse(JSON.stringify(filterData));

            const sortedData = this.getPaginatedData(this.getSortedData(filterData));
            return sortedData;
        });
    }

    disconnect() { }

    /** Returns a filtered copy of the database data. */
    getFilteredDataByDate(data) {
        return data.filter((item) => {
            const sDate = this.dateFilter['start'] ? this.dateFilter['start'].valueOf() : null;
            const eDate = this.dateFilter['end'] ? this.dateFilter['end'].valueOf() : null;
            const date = item.date.valueOf();

            if (!this.dateFilter['start'] && !this.dateFilter['end']) {
                return item;
            } else if (this.dateFilter['start'] && !this.dateFilter['end'] && date > sDate) {
                return item;
            } else if (!this.dateFilter['start'] && this.dateFilter['end'] && date < eDate) {
                return item;
            } else if (this.dateFilter['start'] && this.dateFilter['end'] && sDate < date && date > eDate) {
                return item;
            }
        });
    }

    /** Returns a filtered copy of the database data. */
    getFilteredData(data) {
        return data.filter((item) => {
            const searchStr = (item.beneficiary + item.ref_num).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
    }

    /** Returns a paginated copy of the database data. */
    getPaginatedData(data): TnaAccount[] {
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        return data.splice(startIndex, this._paginator.pageSize);
    }

    /** Returns a sorted copy of the database data. */
    getSortedData(data): TnaAccount[] {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }

        return data.sort((a: TnaAccount, b: TnaAccount) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._sort.active) {
                case 'date':
                    [propertyA, propertyB] = [a.date, b.date];
                    break;
                case 'beneficiary':
                    [propertyA, propertyB] = [a.beneficiary, b.beneficiary];
                    break;
                case 'amount':
                    [propertyA, propertyB] = [a.amount, b.amount];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}
