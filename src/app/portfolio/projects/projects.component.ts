import { Component, OnInit } from '@angular/core';
import { ApiServicePortfolio } from '../api-portfolio.service';
import { Project } from 'src/app/portfolio/portfolio-models';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: any;
  editedProject: any;
  rateHovered = 0;
  constructor(private apiService: ApiServicePortfolio) {}

  ngOnInit() {
    this.apiService.get_projects().subscribe(
      (data: any) => {
        this.projects = data;
      },
      (error) => console.log(error)
    );
  }

  rateHover(rate: number) {
    this.rateHovered = rate;
  }

  rateEnter(rate: number, project: Project) {
    this.selectedProject = project;
    this.apiService.rate_project(rate, this.selectedProject.id).subscribe(
      (updatedProject: Project) => {
        this.apiService.get_project(this.selectedProject.id).subscribe(
          (fetchedProject: Project) => {
            const index = this.projects.findIndex(
              (p) => p.id === fetchedProject.id
            );
            this.projects[index] = fetchedProject;
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }

  editProject(project: Project) {
    this.editedProject = project;
    console.log(this.editedProject);
  }
}
