import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  standalone: true,
  imports:[
    RouterLink,
    RouterModule,
    FormsModule
  ]
})
export class AddPropertyComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Submitted');
  }

}
