import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  standalone: true,
  imports:[
    RouterLink,
    RouterModule,
    FormsModule,
    TabsModule
  ]
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('formTabs') formTabs?: TabsetComponent;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(Form:NgForm){
    console.log('Submitted');
    console.log(Form.value.PropertyName);
  }
}
