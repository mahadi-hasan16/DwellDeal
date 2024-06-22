import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';

export const routes: Routes = [
    { path: '', component: PropertyListComponent },
    { path: 'home', component: PropertyListComponent },
    { path: 'add-property', component: AddPropertyComponent},
    { path: 'app-property-details/:id', component: PropertyDetailsComponent}
];
