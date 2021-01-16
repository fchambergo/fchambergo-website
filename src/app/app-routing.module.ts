import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JourneyComponent } from './journey/journey.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'journey', component: JourneyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
