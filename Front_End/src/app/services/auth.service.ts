import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { loginReq, loginRes } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  registerPath = this.baseUrl + environment.register;
  loginPath = this.baseUrl + environment.login;

  constructor(private _httpClient: HttpClient) {}

  Login(user: loginReq): Observable<loginRes> {
    return this._httpClient.post<loginRes>(this.loginPath, user);
  }

  Register(user:any){
    return this._httpClient.post(this.registerPath, user);
  }
  }

