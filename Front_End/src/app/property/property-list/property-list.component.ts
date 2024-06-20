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

  constructor() { }
  properties: Array<any> = [
    {
      Id: 1,
      Location: "Mirpur, Dhaka",
      Contact: "01xxxxxxxxx",
      Type: "Sell",
      Price: 0
    },
    {
      Id: 2,
      Location: "Agrabad, Chittagonj",
      Contact: "01xxxxxxxxx",
      Type: "Rent",
      Price: 0
    },
    {
      Id: 3,
      Location: "Banani, Dhaka",
      Contact: "01xxxxxxxxx",
      Type: "Sell",
      Price: 0
    },
    {
      Id: 4,
      Location: "Mohakhali, Dhaka",
      Contact: "01xxxxxxxxx",
      Type: "Sell",
      Price: 0
    },
    {
      Id: 5,
      Location: "Mohammadpur, Dhaka",
      Contact: "01xxxxxxxxx",
      Type: "Sell",
      Price: 0
    }
  ]
  ngOnInit() {
  }

}
