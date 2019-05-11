import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdCardModule,
    MdDatepickerModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdTooltipModule,
    MdCheckboxModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    exports: [
        CdkTableModule,
        MdButtonModule,
        MdCardModule,
        MdDatepickerModule,
        MdDialogModule,
        MdIconModule,
        MdInputModule,
        MdNativeDateModule,
        MdPaginatorModule,
        MdProgressSpinnerModule,
        MdSelectModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdTooltipModule,
        MdCheckboxModule
    ]
})
export class CustomMaterialModule {
}
