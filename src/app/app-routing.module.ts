import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JourneyComponent } from './journey/journey.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'resume', component: ResumeComponent, 
    children: [
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: '', component: AboutComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  { path: 'work', component: WorkComponent },
  { path: 'journey', component: JourneyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
