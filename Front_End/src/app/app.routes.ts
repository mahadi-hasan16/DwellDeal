import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

export const routes: Routes = [
    { path: '', component: PropertyListComponent },
    { path: 'add-property', component: AddPropertyComponent},
    { path: 'user/register', component: UserRegisterComponent},
    { path: 'user/login', component: UserLoginComponent},
    { path: 'property-details/:Id', component: PropertyDetailsComponent}
];
