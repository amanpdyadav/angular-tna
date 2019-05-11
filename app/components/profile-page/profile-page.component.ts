import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { DialogService } from '../../services/dialog.service';
import { TnaImageCropperComponent } from '../tna-image-cropper/tna-image-cropper.component';
import { TnaMember } from '../../models';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'tna-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']

})
export class ProfilePageComponent implements OnInit, OnDestroy {
    profileForm: FormGroup;

    userProfile: TnaMember;
    editMode = false;

    private _userSubscription: any;

    constructor(private snackBar: MdSnackBar,
                private viewContainerRef: ViewContainerRef,
                private dialogService: DialogService,
                private dataService: DataService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.profileForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: [''],
            lastName: [''],
            phone: [''],
            address: [''],
            google: [''],
            twitter: [''],
            linkedn: [''],
            skype: [''],
            github: [''],
            facebook: [''],
            www: ['']
        });

        this._userSubscription = this.dataService.currentUser.subscribe(res => {
            this.editMode = false;
            this.userProfile = res;
            this.toggleFormControlMode();
            this.profileForm.patchValue(this.userProfile);
        });
    }

    ngOnDestroy() {
        if (this._userSubscription) {
            this._userSubscription.unsubscribe();
        }
    }

    toggleFormControlMode() {
        Object.keys(this.userProfile).forEach(key => {
            if (this.profileForm.controls[key]) {
                if (!this.editMode) {
                    this.profileForm.controls[key].disable();
                } else {
                    this.profileForm.controls[key].enable();
                    this.profileForm.controls.email.disable();
                }
            }
        });
    }

    enableEditMode() {
        this.editMode = true;
        this.toggleFormControlMode();
    }

    updateUser(user: TnaMember) {
        const userData = Object.assign(this.userProfile, user);
        this.dataService.writeUserToDb(this.userProfile.uid, userData)
            .then(res => this.snackBarMessage('Profile updated.'))
            .catch(err => this.snackBarMessage(err.message || err));
    }

    resetForm() {
        this.editMode = false;
        this.toggleFormControlMode();
        this.profileForm.patchValue(this.userProfile);
    }

    snackBarMessage(message) {
        this.snackBar.open(message, null, { duration: 5000 });
    }

    uploadProfilePic() {
        this.dialogService.open(this.viewContainerRef, TnaImageCropperComponent);
    }
}
