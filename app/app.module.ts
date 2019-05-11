import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ImageCropperModule } from 'ng2-img-cropper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
// Modules
import { CustomMaterialModule } from './modules/custom-material.module';
import { routing } from './modules/routing.module';
// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { EventsComponent } from './components/pages/events/events.component';
import { AccountComponent } from './components/pages/account/account.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { MembersComponent } from './components/pages/members/members.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { MemberTableComponent } from './components/member-table/member-table.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AccountTableComponent } from './components/account-table/account-table.component';
import { EventsReviewComponent } from './components/events-review/events-review.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { TnaEventCardComponent } from './components/tna-event-card/tna-event-card.component';
import { EventCreationComponent } from './components/event-creation/event-creation.component';
import { NordeaAccountComponent } from './components/nordea-account/nordea-account.component';
import { ConfirmationDialog } from './components/confirmation-dialog/confirmation-dialog.component';
import { TnaImageCropperComponent } from './components/tna-image-cropper/tna-image-cropper.component';
import { EventRegistrationComponent } from './components/event-registration/event-registration.component';
// Pipes
import { AddressPipe } from './pipes/address.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ArrayFromObjectPipe } from './pipes/array-from-object.pipe';
// Services
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { DialogService } from './services/dialog.service';
import { FirebaseService } from './services/firebase.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        EventsComponent,
        SignupComponent,
        AccountComponent,
        GalleryComponent,
        ContactComponent,
        MembersComponent,
        ConfirmationDialog,
        MemberCardComponent,
        MemberTableComponent,
        EventsTableComponent,
        ProfilePageComponent,
        TnaEventCardComponent,
        EventsReviewComponent,
        AccountTableComponent,
        EventDetailsComponent,
        EventCreationComponent,
        NordeaAccountComponent,
        TnaImageCropperComponent,
        EventRegistrationComponent,
        AddressPipe,
        SafeHtmlPipe,
        ArrayFromObjectPipe
    ],
    imports: [
        routing,
        FormsModule,
        RouterModule,
        BrowserModule,
        HttpClientModule,
        FlexLayoutModule,
        ImageCropperModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        BrowserAnimationsModule
    ],
    entryComponents: [
        LoginComponent,
        SignupComponent,
        ConfirmationDialog,
        EventCreationComponent,
        TnaImageCropperComponent,
        EventRegistrationComponent
    ],
    providers: [
        AuthService,
        DataService,
        DialogService,
        FirebaseService,
        { provide: LOCALE_ID, useValue: 'en-FI' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
