import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Property } from '../../models/Property';
import { HousingService } from '../../services/housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatTabsModule,
    TabsModule,
    CarouselModule
  ],
  standalone: true
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId: number = 0;
  property = new Property();
  public propertyAge!: string;

  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) =>{
      this.property = data['propertyDetail'] as Property;
    })

    this.propertyAge = this.housingService.getPropertyAge(this.property.estPossessionOn);

    //console.log(this.property);
  }

  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['app-property-details' + this.propertyId]);
  }

  onPaging(id:string){
    this.router.navigate(['app-property-details/'+id]);
  }
}
