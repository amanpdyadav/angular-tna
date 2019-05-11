import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { TnaEvent, TnaEventAttendee, TnaMember } from '../../models';

@Component({
    selector: 'tna-event-registration',
    templateUrl: './event-registration.component.html',
    styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit, OnDestroy {
    @Input() data: TnaEvent;
    @Output() emitChange = new EventEmitter();
    registering = false;
    userProfile: TnaMember;
    registerForEventForm: FormGroup;
    _dataSubscription: any;
    persons = {
        adult: 10,
        family: 5,
        children: 0,
        veg: 0,
        totalAmount: 0
    };

    constructor(private snackBar: MdSnackBar,
                private dataService: DataService,
                private dialogRef: MdDialogRef<EventRegistrationComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.registerForEventForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            address: ['', [Validators.required]],
            families: [0],
            adults: [0],
            kids: [0],
            vegetarians: [0]
        }, { validator: numberOfAttendeesVerifier });
        this.userProfile = this.dataService.currentUser.value;
        this.userProfile['name'] = (this.userProfile.firstName || '') + (this.userProfile.lastName || '');
        this.registerForEventForm.patchValue(this.userProfile);
    }

    ngOnDestroy() {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
        }
    }

    registerForEvent() {
        this.registering = true;

        this.dataService.registerForEvent(this.data.uid, this.calculateTotal())
            .then(res => {
                if (res && res.error) {
                    this.registering = false;
                    this.snackBar.open(res.error, null, { duration: 5000 });
                    return;
                }
                this.registering = false;
                this.closeDialog();
                this.snackBar.open('Registrations successful.', null, { duration: 5000 });
            });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    updateNumbers(resetDependents?) {
        if (resetDependents) {
            this.registerForEventForm.patchValue({
                kids: '',
                vegetarians: ''
            });
        }

        const family = parseInt(this.registerForEventForm.value.families, 10);
        const adult = parseInt(this.registerForEventForm.value.adults, 10);

        this.persons.veg = adult + family * 3;
        this.persons.children = adult + family * 3;

        this.calculateTotal();
    }

    calculateTotal() {
        const data: TnaEventAttendee = this.registerForEventForm.value;

        data.adults = parseInt(data.adults + '', 10) || 0;
        data.families = parseInt(data.families + '', 10) || 0;
        data.vegetarians = parseInt(data.vegetarians + '', 10) || 0;
        data.kids = parseInt(data.kids + '', 10) || 0;
        data['total'] = data.adults * this.data.adultPrice + data.families * this.data.familyPrice + data.kids * this.data.kidPrice;
        this.persons.totalAmount = data['total'];
        if (this.userProfile && this.userProfile.membershipPaid) {
            this.persons.totalAmount = this.persons.totalAmount - this.persons.totalAmount / 10;
        }
        data['owner'] = this.data.uid;
        return data;
    }

    createArray(val) {
        return Array.from(Array(val).keys());
    }
}

export const numberOfAttendeesVerifier = (control: AbstractControl): { [key: string]: boolean } => {
    const family = control.get('families');
    const adults = control.get('adults');
    if (!family || !adults) {
        return null;
    }
    return (parseInt(family.value, 10) <= 0 && parseInt(adults.value, 10) <= 0) ? { not_selected: true } : null;
};
