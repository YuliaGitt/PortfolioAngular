import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ApiServicePortfolio } from '../api-portfolio.service';

import { Project, Skill } from 'src/app/portfolio/portfolio-models';
import { PortfolioFormsComponent } from '../portfolio-forms/portfolio-forms.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  selectedProject: { [projectId: number]: number } = {};
  projects: Array<Project> = [];
  skills: Array<Skill> = [];

  constructor(
    private apiService: ApiServicePortfolio,
    private bsModalService: BsModalService
  ) {}
  ngOnInit() {
    this.apiService.get_projects().subscribe(
      (data: any) => {
        this.projects = data;
      },
      (error) => console.log(error)
    );
  }

  rateHover(rate: number, projectId: number) {
    this.selectedProject[projectId] = rate;
  }

  rateEnter(rate: number, projectId: number) {
    this.selectedProject[projectId] = projectId;
    this.apiService
      .rate_project(rate, this.selectedProject[projectId])
      .subscribe(
        (updatedProject: Project) => {
          this.apiService
            .get_project(this.selectedProject[projectId])
            .subscribe(
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

  getSkillName(skillIds: any[]) {
    return skillIds
      .map((skillId) => {
        const skill = this.skills.find((s: any) => s.id === skillId);
        return skill ? skill.name : 'None';
      })
      .join(', ');
  }
}
