import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {}

  authUser(user: any) {
    return this._httpClient.post(this.baseUrl + '/account/login', user);
  }
  }

