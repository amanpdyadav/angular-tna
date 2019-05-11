import { Component, OnDestroy, OnInit } from '@angular/core';
import { TnaMember } from '../../../models';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'tna-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {
    bordMembers: Array<TnaMember> = [];
    paidMembers: Array<TnaMember> = [];

    _dataSubscription: any;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this._dataSubscription = this.dataService.users.subscribe(res => {
            this.bordMembers = res.filter((mem: TnaMember) => mem.isBoardMember);
            this.paidMembers = res.filter((mem: TnaMember) =>
                !mem.isBoardMember && !mem.isAdmin && mem.membershipPaid && mem.membershipPaid['2018']);

            this.bordMembers = getSortedMembers(this.bordMembers);
            this.paidMembers = getSortedMembers(this.paidMembers);
        });
    }

    ngOnDestroy() {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
        }
    }
}

export function getSortedMembers(members: Array<TnaMember>) {
    const memWithSocialProfile = [];
    const memWithOutSocialProfile = [];
    members.forEach((b: TnaMember) => {
        if (!b.skype && !b.google && !b.github && !b.linkedn && !b.facebook) {
            memWithOutSocialProfile.push(b);
        } else {
            memWithSocialProfile.push(b);
        }
    });
    return JSON.parse(JSON.stringify(memWithSocialProfile.concat(memWithOutSocialProfile)));
}
