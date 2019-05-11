import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'tna-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    sendingMessage = false;
    contactForm: FormGroup;

    constructor(private fb: FormBuilder,
                private snackBar: MdSnackBar,
                private dataService: DataService) { }

    ngOnInit() {
        this.contactForm = this.fb.group({
            name: [''],
            phone: [''],
            subject: [''],
            message: ['', [Validators.minLength(10), Validators.maxLength(500)]],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    sendMessage(data) {
        const mssageToSend = {
            to: data.email,
            subject: 'Contact request.',
            body: `
        Name: ${data.email}
        Phone: ${data.phone}

        ${data.message}
      `
        };
        console.log(mssageToSend);
        this.sendingMessage = true;
        this.dataService.sendMessage(mssageToSend)
            .then(res => {
                this.snackBar.open('Message sent.', null, { duration: 5000 });
                this.resetForm();
                this.sendingMessage = false;
            }).catch(err => {
            this.snackBar.open('Message sent.', null, { duration: 5000 });
            this.resetForm();
            this.sendingMessage = false;
        });
    }

    resetForm() {
        this.contactForm.reset();
    }

}
