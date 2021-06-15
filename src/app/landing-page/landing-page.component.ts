import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
  }

  goToLink(link: string) {
    window.open(link, "_blank")
  }
}
