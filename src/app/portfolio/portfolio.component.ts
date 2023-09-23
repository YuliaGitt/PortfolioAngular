import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Project, Skill, Education } from '../models/portfolio-models';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  project: Project[] = [];
  projects: Project[] = [];
  educations: any = [];
  skills: any = [];
  selectedProject: any;
  rateHovered = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get_projects().subscribe(
      (data: any) => {
        this.projects = data;
      },
      (error) => console.log(error)
    );
    this.apiService.get_educations().subscribe(
      (data) => {
        this.educations = data;
      },
      (error) => console.log(error)
    );

    this.apiService.get_skills().subscribe(
      (data) => {
        this.skills = data;
      },
      (error) => console.log(error)
    );
  }

  rateHover(rate: number) {
    this.rateHovered = rate;
  }

  getProjects() {
    this.apiService.get_projects().subscribe(
      (data: any) => {
        this.projects = data;
      },
      (error) => console.log(error)
    );
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
}
