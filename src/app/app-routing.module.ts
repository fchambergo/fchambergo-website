import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JourneyComponent } from './journey/journey.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'journey', component: JourneyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
