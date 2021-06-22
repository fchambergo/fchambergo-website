import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JourneyComponent } from './journey/journey.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'work', component: WorkComponent },
  { path: 'journey', component: JourneyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: LandingPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
