import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { CopyrightComponent } from './property/copyright/copyright.component';
import { NavbarComponent } from './property/navbar/navbar.component';
import { PropertyListComponent } from './property/property-list/property-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PropertyCardComponent,
    PropertyListComponent,
    NavbarComponent,
    CopyrightComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dwell Deal';
}
