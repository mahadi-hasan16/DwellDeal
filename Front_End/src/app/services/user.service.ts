import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  addUser(user: User) {
    let users: User[] = [];
    const storedUsers = localStorage.getItem('Users');

    if (storedUsers) {
      try {
        users = JSON.parse(storedUsers);
        if (!Array.isArray(users)) {
          users = [];
        }
      } catch (error) {
        console.error('Error parsing users from localStorage', error);
        users = [];
      }
    }

    users = [user, ...users];
    localStorage.setItem('Users', JSON.stringify(users));
  }
  
}
