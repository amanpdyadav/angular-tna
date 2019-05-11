import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home/home.component';
import { EventsComponent } from '../components/pages/events/events.component';
import { GalleryComponent } from '../components/pages/gallery/gallery.component';
import { AccountComponent } from '../components/pages/account/account.component';
import { MembersComponent } from '../components/pages/members/members.component';
import { ModuleWithProviders } from '@angular/core';
import { ContactComponent } from '../components/pages/contact/contact.component';
import { ProfilePageComponent } from '../components/profile-page/profile-page.component';
import { AuthService } from '../services/auth.service';

const routes: Routes = [

    { path: 'events', component: EventsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'members', component: MembersComponent },
    { path: 'contact', component: ContactComponent },

    { path: 'home', component: HomeComponent },
    { path: 'home/:login', component: HomeComponent },
    { path: 'resetpassword/:token', component: HomeComponent },
    { path: 'verifyemail/:token', component: HomeComponent },

    { path: 'account', component: AccountComponent, canActivate: [AuthService] },

    { path: 'profile', component: ProfilePageComponent, canActivate: [AuthService] },

    { path: '**', redirectTo: 'home' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
