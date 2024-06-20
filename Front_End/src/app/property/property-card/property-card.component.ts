import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  standalone: true
})
export class PropertyCardComponent implements OnInit {

  constructor() { }
  @Input() property: any;

  ngOnInit() {
  }

}
