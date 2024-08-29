import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { IPropertyBase } from '../../interfaces/IPropertyBase';
import { Property } from '../../models/Property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  standalone: true,
  imports: [
    PropertyCardComponent,
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    TabsModule,
    ButtonsModule,
    ReactiveFormsModule,
  ],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('formTabs') formTabs?: TabsetComponent;
  // @ViewChild('Form') addPropertyForm!: NgForm;

  property = new Property();
  sellRent = '1';

  propertyTypes: Array<String> = ['House', 'Appartment', 'Duplex', 'Triplex'];
  furnushTypes: Array<String> = ['Semi', 'Full', 'Unfurnished'];

  addPropertyForm!: FormGroup;

  propertyView: IPropertyBase = {
    Id: null,
    SellRent: 0,
    Name: '',
    // Location: null,
    // Contact: null,
    Price: 0,
    PType: '',
    FType: '',
    BHK: null,
    BuiltArea: 0,
    City: null,
    RTM: 0,
    Image: null,
  };

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addPropertyForm = this.formBuilder.group({
      BasicInfo: this.formBuilder.group({
        SellRent: ['1' , Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),

      PriceInfo: this.formBuilder.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),

      AddressInfo: this.formBuilder.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.formBuilder.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
      });
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }


  //----------- Getter Methods ----------

  get BasicInfo(){
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get BHK(){
    return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PType(){
    return this.BasicInfo.controls['PType'] as FormControl;
  }

  get FType(){
    return this.BasicInfo.controls['FType'] as FormControl;
  }

  get SellRent(){
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get PriceInfo(){
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get Price(){
    return this.PriceInfo.controls['Price'] as FormControl;
  }
// --------------------------------------------


  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Submitted');
    // console.log(Form.value);
  }
}
