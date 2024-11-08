import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  imports: [PropertyCardComponent, CommonModule],
  standalone: true,
})
export class PropertyListComponent implements OnInit {
  sellRent: number = 1;
  properties: Array<any> = [];
  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    
    this.housingService
      .getAllProperties(this.sellRent)
      .subscribe((data: any) => {
        this.properties = data;
      });
  }
}
