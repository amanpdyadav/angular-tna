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
import { TnaMember } from '../../models';
import { DataService } from '../../services/data.service';
import { MdDialog } from '@angular/material';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'tna-member-table',
    templateUrl: './member-table.component.html',
    styleUrls: ['./member-table.component.scss']
})
export class MemberTableComponent implements OnInit, OnDestroy {
    @ViewChild(MdSort) sort: MdSort;
    @ViewChild('filter') filter: ElementRef;
    @ViewChild(MdPaginator) paginator: MdPaginator;

    userProfile: any;
    displayedColumns = ['name', 'email', 'phone', 'membershipPaid'];
    dataSource: CustomDataSource | null;

    dataLength = 0;
    private _dataSubscription: any;

    constructor(private dataService: DataService,
                public mdDialog: MdDialog) {
    }

    ngOnInit() {
        this._dataSubscription = this.dataService.users.subscribe(res => {
            this.userProfile = this.dataService.currentUser.value;
            const data = res.map((mem: TnaMember) => {
                mem['name'] = (mem.firstName || '') + ' ' + (mem.lastName || '');
                return mem;
            });
            this.dataLength = data.length;
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
                    this.dataLength = this.dataSource.filteredDataLength;
                });
        });
    }

    ngOnDestroy() { this._dataSubscription.unsubscribe(); }

    onMemberStateSelection(value) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.memberFilter = value;
        this.dataLength = this.dataSource.filteredDataLength;
    }

    confirmMembershipPayment(id) {
        const dialogRef = this.mdDialog.open(ConfirmationDialog, {
            data: {
                title: 'Confirm membership payment',
                content: 'Confirm if this member has paid the membership?'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'Ok') {
                this.dataService.confirmMembershipPayment(id)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        });
    }
}


export class CustomDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
    _memberChange = new BehaviorSubject<any>('');
    _filteredDataLength = 0;

    get filteredDataLength() { return this._filteredDataLength; }

    get filter(): string { return this._filterChange.value; }

    get memberFilter(): string { return this._memberChange.value; }

    set filter(filter: string) { this._filterChange.next(filter); }

    set memberFilter(dates: string) { this._memberChange.next(dates); }

    constructor(private _database, private _sort: MdSort, private _paginator: MdPaginator) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<TnaMember[]> {
        const displayDataChanges = [
            this._database.dataChange,
            this._sort.mdSortChange,
            this._paginator.page,
            this._filterChange,
            this._memberChange
        ];

        return Observable.merge(...displayDataChanges).map(() => {
            // Grab the page's slice of data.
            const data = this._database.data.slice();
            const filterData = this.getFilteredDataByMemberStatus(this.getFilteredData(data));

            this._filteredDataLength = JSON.parse(JSON.stringify(filterData)).length;

            return this.getPaginatedData(this.getSortedData(filterData));
        });
    }

    disconnect() { }

    /** Returns a filtered copy of the database data. */
    getFilteredDataByMemberStatus(data) {
        if (!this.memberFilter) {
            return data;
        }
        return data.filter((item) => {
            if (this.memberFilter.toString().toLowerCase() === 'paid') {
                return item.is_verified === true;
            }
            return item.is_verified === false;
        });
    }

    /** Returns a filtered copy of the database data. */
    getFilteredData(data) {
        return data.filter((item) => {
            const searchStr = (item.name + item.email + item.phone).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
    }

    /** Returns a paginated copy of the database data. */
    getPaginatedData(data): TnaMember[] {
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        return data.splice(startIndex, this._paginator.pageSize);
    }

    /** Returns a sorted copy of the database data. */
    getSortedData(data): TnaMember[] {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }

        return data.sort((a: TnaMember, b: TnaMember) => {
            let propertyA: number | string | boolean = '';
            let propertyB: number | string | boolean = '';

            switch (this._sort.active) {
                case 'name':
                    [propertyA, propertyB] = [a['name'], b['name']];
                    break;
                case 'address':
                    [propertyA, propertyB] = [a.address, b.address];
                    break;
                case 'phone':
                    [propertyA, propertyB] = [a.phone, b.phone];
                    break;
                case 'email':
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case 'membershipPaid':
                    [propertyA, propertyB] = [a.membershipPaid, b.membershipPaid];
                    break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}
