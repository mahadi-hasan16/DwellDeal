import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertifyService } from '../../services/alertify.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class UserLoginComponent implements OnInit {
loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _alertify: AlertifyService
  ) {}

  ngOnInit() {
    
  }

  createLoginForm() {
    this.loginForm = this._formBuilder.group(
      {
        email : [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
      }
    );
  }

  
onSubmit() {}

getEmail() {
  return this.loginForm?.get('email') as FormControl;
}

getPassword() {
  return this.loginForm?.get('password') as FormControl;
}

}



