import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialog {

    constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
}
