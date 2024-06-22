import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes, RouterModule } from '@angular/router'; 

import { PropertyCardComponent } from './components/property-card/property-card.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PropertyCardComponent,
    PropertyListComponent,
    NavbarComponent,
    CopyrightComponent,
    AddPropertyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dwell Deal';
}
