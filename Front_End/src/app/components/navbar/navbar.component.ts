import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    RouterLink,
    CommonModule
  ],
  standalone: true
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLoggedin() {
    return localStorage.getItem('token');
  }

  onLogout() {
    return localStorage.removeItem('token');
  }

}
