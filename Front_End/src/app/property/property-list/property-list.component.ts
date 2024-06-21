import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  imports: [
    PropertyCardComponent,
    CommonModule
  ],
  standalone: true
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [];
  constructor() { }
  
  ngOnInit() {
  }

}
