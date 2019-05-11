import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TnaMember } from '../../models';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'tna-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    error: any;

    constructor(private snackBar: MdSnackBar,
                private authService: AuthService,
                private dataService: DataService,
                private dialogRef: MdDialogRef<SignupComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
            confirmPassword: ['']
        });
    }

    signUp(val) {
        const tmpUser = new TnaMember();
        this.authService.signUpWithEmailPassword(val.email, val.password)
            .then(res => {
                tmpUser.email = res.email;
                return this.dataService.writeUserToDb(res.uid, tmpUser)
                    .then(r => r);
            })
            .then(res => {
                this.openSnackBar('User successfully registered.');
                this.closeDialog();
            })
            .catch(err => this.error = err);
    }

    closeDialog() {
        this.error = null;
        this.dialogRef.close();
    }

    openSnackBar(message) {
        this.snackBar.open(message, null, { duration: 5000 });
    }
}
