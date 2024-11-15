import { Routes } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { propertyDetailResolver } from './components/property-details/property-details-resolver.service';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

export const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/login', component: UserLoginComponent },
  { 
    path: 'property-details/:id', 
    component: PropertyDetailsComponent,
    resolve: { propertyDetail: propertyDetailResolver },
 },
];
