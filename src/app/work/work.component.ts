import { Component, OnInit } from '@angular/core';
import { Projects } from '../shared/projects.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Projects[] = [];

  constructor(public projectService: ProjectsService) {
   }

  getProjects() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    })
  }

  goToLink(link: string) {
    window.open(link, "_blank")
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
