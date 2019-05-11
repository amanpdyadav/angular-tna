import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { TnaMember } from '../../../models';


@Component({
    selector: 'tna-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
    showNodeaTransaction = false;
    selectedTab = 0;
    private _dataSubscription: any;

    userProfile: TnaMember;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this._dataSubscription = this.dataService.accounts.subscribe(res => {
            this.userProfile = this.dataService.currentUser.value;
        });
    }

    ngOnDestroy() {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
        }
    }

    uploadAccountFile(evt) {
        console.log(evt);
    }
}
