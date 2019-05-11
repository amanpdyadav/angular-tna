import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Posts } from '../../models';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'tna-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    resetPassword = false;
    loginForm: FormGroup;
    registerForm: FormGroup;

    error: any;

    constructor(private snackBar: MdSnackBar,
                private authService: AuthService,
                private dataService: DataService,
                private dialogRef: MdDialogRef<LoginComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        });

        this.registerForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]]
        });
    }

    loginWithGoogle() {
        this.authService.signInWithProvider()
            .then(res => {
                if (res && res.additionalUserInfo && res.additionalUserInfo.isNewUser) {
                    return this.dataService.writeUserToDb(res.user.uid, {
                        email: res.user.email,
                        post: Posts.MEMBER
                    })
                        .then(r => {
                            this.openSnackBar('User successfully creted');
                            return r;
                        });
                } else {
                    return res;
                }
            })
            .then(res => this.closeDialog());
    }

    loginWithEmail(evt) {
        this.authService.signInWithEmailPassword(evt.email, evt.password)
            .then(res => this.closeDialog())
            .catch(err => this.error = err.message);
    }

    onResetPassword(evt) {
        this.authService.passwordResetEmail(evt.email)
            .then(res => {
                this.openSnackBar('Password reset email successfully sent. Check your email.');
                this.closeDialog();
            })
            .catch(err => this.error = err.message);
    }

    closeDialog() {
        this.error = null;
        this.dialogRef.close();
    }

    openSnackBar(message) {
        this.snackBar.open(message, null, { duration: 5000 });
    }
}
