import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DialogService {

    constructor(private dialog: MdDialog) {
    }

    public open(viewContainerRef: ViewContainerRef, component, data?: any): Observable<any> {

        const config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        const dialogRef = this.dialog.open(component, config);

        if (data) {
            dialogRef.componentInstance['data'] = data;
        }

        return dialogRef.componentInstance['emitChange'];
    }
}
