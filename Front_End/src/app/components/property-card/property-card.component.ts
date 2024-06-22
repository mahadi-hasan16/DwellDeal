import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { IProperty } from '../../interfaces/IProperty';
import { PropertyDetailsComponent } from '../property-details/property-details.component';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  imports: [
    PropertyDetailsComponent,
    RouterLink
  ],
  standalone: true
})
export class PropertyCardComponent implements OnInit {

  constructor() { }
  @Input() property: any;

  ngOnInit() {
  }

}
