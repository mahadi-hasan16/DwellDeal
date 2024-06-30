import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: any) {
    let UserArray: any[] = [];
    // const storedUsers = localStorage.getItem('Users');

      if (localStorage.getItem('Users')) {
        UserArray = JSON.parse(localStorage.getItem('Users') ?? '[]');
        if (!Array.isArray(UserArray)) {
          UserArray = [];
        }
      }
      return UserArray.find((p)=>
      {
        p.userName === user.userName && p.password === user.password;
      })
    }
  }

