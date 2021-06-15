import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addNavbarCloseFunctionality();
  }

  closeCoverNavbar() {
    var coverNavbar = document.getElementsByClassName('menu-dropdown-cover');
    var hamburger = document.getElementsByClassName('menu-toggle')[0];
    if (coverNavbar.length > 0) {
      const el = document.querySelector('.navbar__items');
      el.classList.remove('menu-dropdown-cover');
      hamburger.classList.remove('is-active');
    }
  }

  toggleNav() {
    var element = document.getElementsByClassName('menu-toggle')[0];
    element.classList.toggle('is-active');

    var menu = document.getElementsByClassName('navbar__items')[0];
    menu.classList.toggle('menu-dropdown-cover');
  }

  addNavbarCloseFunctionality() {
    var links = document.getElementsByClassName('navbar__item');
    
    for(var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', this.closeCoverNavbar)
    }
  }

}
