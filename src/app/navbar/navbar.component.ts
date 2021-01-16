import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    var element = document.getElementsByClassName('menu-toggle')[0];
    element.classList.toggle('is-active');

    var menu = document.getElementsByClassName('navbar__items')[0];
    menu.classList.toggle('menu-dropdown-cover');
  }

}
