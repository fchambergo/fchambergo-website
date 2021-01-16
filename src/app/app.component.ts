import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fchambergo-website';


  toggleNav() {
    var element = document.getElementsByClassName('menu-toggle')[0];
    element.classList.toggle('is-active');

    var menu = document.getElementsByClassName('navbar__items')[0];
    menu.classList.toggle('menu-dropdown-cover');
  }

}
