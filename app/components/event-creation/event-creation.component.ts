import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DataService } from '../../services/data.service';
import { MdSnackBar } from '@angular/material';
import { TnaEvent } from '../../models';

@Component({
    selector: 'tna-event-creation',
    templateUrl: './event-creation.component.html',
    styleUrls: ['./event-creation.component.scss']
})
export class EventCreationComponent implements OnInit {
    @Input() data: TnaEvent;
    evtDateError = false;
    endDateError = false;
    editEvent = false;

    constructor(private dialogRef: MdDialogRef<EventCreationComponent>,
                private snackBar: MdSnackBar,
                private dataService: DataService) { }

    ngOnInit() {
        if (!this.data) {
            this.data = new TnaEvent();
            this.evtDateError = true;
            this.endDateError = true;
            this.data.owner = this.dataService.currentUser.value.uid;
        } else { this.editEvent = true; }
    }

    closeDialog() {
        this.dialogRef.close();
    }

    onDateChanged(key, value) {
        if (!value || value.length === 0 || new Date(value).toString() === 'Invalid Date') {
            this[key] = true;
        } else {
            this[key] = false;
            this.data[key === 'endDateError' ? 'expiryDate' : 'date'] = new Date(value).toUTCString();
        }
    }

    onUpdateEvent() {
        this.data.adultPrice = !this.data.adultPrice || this.data.adultPrice < 0 ? 0 : this.data.adultPrice;
        this.data.kidPrice = !this.data.kidPrice || this.data.kidPrice < 0 ? 0 : this.data.kidPrice;
        this.data.familyPrice = !this.data.familyPrice || this.data.familyPrice < 0 ? 0 : this.data.familyPrice;

        this.data.date = this.data.date.toString();
        this.data.expiryDate = this.data.expiryDate.toString();
        if (this.editEvent) {
            const uid = this.data.uid;
            delete this.data['uid'];
            this.dataService.updateEvent(uid, this.data)
                .then(res => {
                    this.closeDialog();
                    this.snackBarMessage('Event has been successfully updated.');
                })
                .catch(err => {
                    this.closeDialog();
                    this.snackBarMessage('Event update failed.');
                });
        } else {
            this.dataService.addEvent(this.data)
                .then(res => {
                    this.closeDialog();
                    this.snackBarMessage('Event has been successfully added.');
                })
                .catch(err => {
                    this.closeDialog();
                    this.snackBarMessage('Event was not created.');
                });
        }
    }

    deleteEvent() {
        this.dataService.deleteEvent(this.data.uid)
            .then(res => {
                this.closeDialog();
                this.snackBarMessage('Event has been successfully deleted.');
            })
            .catch(err => {
                this.closeDialog();
                this.snackBarMessage('Event deletion failed.');
            });
    }

    snackBarMessage(message) {
        this.snackBar.open(message, null, { duration: 5000 });
    }
}
