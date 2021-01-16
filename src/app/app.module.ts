import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { JourneyComponent } from './journey/journey.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    WorkComponent,
    JourneyComponent,
    NavbarComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
