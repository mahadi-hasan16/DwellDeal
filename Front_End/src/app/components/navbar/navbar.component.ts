import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AlertifyService } from '../../services/alertify.service';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    RouterLink,
    CommonModule,
    BsDropdownModule
  ],
  standalone: true,
})
export class NavbarComponent implements OnInit {

  constructor(private _alertify : AlertifyService) { }

  ngOnInit() {
  }

  isLoggedin() {
    return localStorage.getItem('username');
   // return false;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    this._alertify.success('You are logged out');
  }

}
