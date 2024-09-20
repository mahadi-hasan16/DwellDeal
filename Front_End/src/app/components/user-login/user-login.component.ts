import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertifyService } from '../../services/alertify.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { loginRes } from '../../interfaces/User';

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
    private _alertify: AlertifyService,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this._formBuilder.group(
      {
        username : [null, [Validators.required]],
        password: [null, [Validators.required]]
      }
    );
  }

  
onLogin(loginForm: FormGroup) {
  this._auth.Login(loginForm.value).subscribe(
    (res: loginRes) => {
      const user = res;
      localStorage.setItem('username', user.username);
      localStorage.setItem('token', user.token);
      this._router.navigate(['/']);
      } 
  )
 
}

getEmail() {
  return this.loginForm?.get('email') as FormControl;
}

getPassword() {
  return this.loginForm?.get('password') as FormControl;
}

}



