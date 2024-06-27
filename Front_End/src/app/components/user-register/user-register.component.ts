import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  standalone: true
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl(null, [Validators.required,]),
        phoneNo: new FormControl(null, [Validators.required, Validators.maxLength(11),Validators.minLength(11)])
      },this.passwordMatchingValidator)
  }

  passwordMatchingValidator(formGroup : AbstractControl) : Validators{
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value ? true : {notMathchedStatus: true};
  }

  onSubmit()
  {

  }



}
