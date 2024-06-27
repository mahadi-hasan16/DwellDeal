import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports: [CommonModule, ReactiveFormsModule, JsonPipe],
  standalone: true,
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User; //For storing User Information

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {}

  ngOnInit() {
    // The commented piece of code creates a form using FormGroup
    // this.registrationForm = new FormGroup(
    //   {
    //     userName: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(8),
    //     ]),
    //     confirmPassword: new FormControl(null, [Validators.required]),
    //     phoneNo: new FormControl(null, [
    //       Validators.required,
    //       Validators.maxLength(11),
    //       Validators.minLength(11),
    //     ]),
    //   },
    //   this.passwordMatchingValidator
    // );

    this.createRegistrationForm();
  }
  // createRegistrationForm() creates form using FormBuilder.
  createRegistrationForm() {
    this.registrationForm = this._formBuilder.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]],
        phoneNo: [
          null,
          [
            Validators.required,
            Validators.maxLength(11),
            Validators.minLength(11),
          ],
        ],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(formGroup: AbstractControl): Validators {
    return formGroup.get('password')?.value ===
      formGroup.get('confirmPassword')?.value
      ? true
      : { notMathchedStatus: true };
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    // this.user = Object.assign(this.user, this.registrationForm.value);

    this._userService.addUser(this.getUserData());
    this.registrationForm.reset();
  }

  //Getters

  getUserData(): User {
    return (this.user = {
      userName: this.getUserName()?.value,
      email: this.getEmail()?.value,
      password: this.getPassword()?.value,
      phoneNo: this.getPhoneNo()?.value,
    });
  }

  getUserName() {
    return this.registrationForm?.get('userName') as FormControl;
  }

  getEmail() {
    return this.registrationForm?.get('email');
  }

  getPassword() {
    return this.registrationForm?.get('password');
  }

  getConfirmPassword() {
    return this.registrationForm?.get('confirmPasswod');
  }

  getPhoneNo() {
    return this.registrationForm?.get('phoneNo');
  }
}
