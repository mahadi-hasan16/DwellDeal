import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  imports: [PropertyCardComponent, CommonModule],
  standalone: true,
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [];
  constructor(private housingService: HousingService) {}

  ngOnInit() {
    this.housingService.getAllProperties().subscribe(
      (data: any) => {
      this.properties = data;
      console.log(this.properties);
    }
  );

  this.housingService.getAllCities().subscribe(
    (data) => console.log(data)
  )

  }
}
