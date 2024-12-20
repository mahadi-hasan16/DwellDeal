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
import { HousingService } from '../../services/housing.service';
import { IKeyValuePair } from '../../models/IKeyValuePair';

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

  property: Property = new Property();
  sellRent = '1';

  propertyTypes!: IKeyValuePair[];
  furnushTypes!: IKeyValuePair[];
  cities: Array<String> = [];

  addPropertyForm!: FormGroup;

  propertyView: any = {
    id: 0,
    sellRent: 0,
    name: '',
    // Location: null,
    // Contact: null,
    price: 0,
    propertyType: '',
    furnishingType: '',
    bhk: 0,
    builtArea: 0,
    city: '',
    readyToMove: false,
    image: '',
    address: null,
    postedOn: null,
    postedBy: 0
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    this.createForm();
    this.housingService.getAllCities().subscribe( data => {
      this.cities = data;
    }
    );

    this.mapProperty();

    this.housingService.getPropertyTypes().subscribe(data =>{
      this.propertyTypes = data;
    });

    this.housingService.getFurnisihingTypes().subscribe(data =>{
      this.furnushTypes = data;
    });
  }

  createForm() {
    this.addPropertyForm = this.formBuilder.group({
      BasicInfo: this.formBuilder.group({
        SellRent: ['1', Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required],
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
        Landmark: [null],
      }),

      OtherInfo: this.formBuilder.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null],
      }),
    });
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  mapProperty(): void {
    this.property.sellRent = +this.SellRent.value;
    this.property.name = this.Name.value;
    this.property.propertyType = this.PType.value;
    this.property.bhk = this.BHK.value;
    this.property.furnishingType = this.FType.value;
    this.property.price = +this.Price.value;
    this.property.builtArea = +this.BuiltArea.value;
    this.property.carpetArea = +this.CarpetArea.value;
    this.property.address = this.Address.value;
    this.property.address2 = this.Landmark.value;
    this.property.city = this.City.value;
    this.property.floorNo = this.FloorNo.value;
    this.property.totalFloors = this.TotalFloor.value;
    this.property.readyToMove = this.RTM.value;
    this.property.aop = this.AOP.value;
    this.property.mainEntrance = this.MainEntrance.value;
    this.property.security = this.Security.value;
    this.property.gated = this.Gated.value;
    this.property.maintenance = this.Maintenance.value;
    this.property.possession = this.Possession.value;
    // this.property.Image
    this.property.description = this.Description.value;
    this.property.postedOn = new Date().toString();
    // this.property.PostedBy
  }

  //----------- Getter Methods ----------
  // -----------------------
  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls['PType'] as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls['FType'] as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls['Name'] as FormControl;
  }

  get City() {
    return this.BasicInfo.controls['City'] as FormControl;
  }

  // --------------------------

  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls['Maintenance'] as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
  }

  // --------------------------------------------

  get AddressInfo() {
    return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
  }

  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
  }

  get Landmark() {
    return this.AddressInfo.controls['Landmark'] as FormControl;
  }

  // ------------------------------------------------

  get OtherInfo() {
    return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
  }

  get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
  }

  get Possession() {
    return this.OtherInfo.controls['PossessionOn'] as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
  }

  // ---------------------------------------------
  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Submitted');
    this.mapProperty();
    this.housingService.addProperty(this.property);
    // console.log(Form.value);
  }
}
