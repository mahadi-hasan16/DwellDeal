import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { PropertyDetailsComponent } from '../property-details/property-details.component';
import { CommonModule } from '@angular/common';
import { IPropertyBase } from '../../interfaces/IPropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  imports: [
    CommonModule,
    PropertyDetailsComponent,
    RouterLink
  ],
  standalone: true
})
export class PropertyCardComponent implements OnInit {

  constructor() { }
  @Input() property: IPropertyBase | any;
  @Input() detailsButton: boolean = false;

  ngOnInit() {
  }

}
