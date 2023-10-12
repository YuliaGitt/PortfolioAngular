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
  bsModalRef?: BsModalRef;
  projects: Project[] = [];
  selectedProject: any;
  rateHovered = 0;
  skills: Skill[] = [];
  rateHoveredStates: { [projectId: number]: number } = {};
  @Input() project: any;
  @Output() editedProject = new EventEmitter<Project>();
  @Output() newProject = new EventEmitter();
  @Output() deletedProject = new EventEmitter<Project>();

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
    this.rateHoveredStates[projectId] = rate;
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

  getSkillName(skillIds: any[]) {
    return skillIds
      .map((skillId) => {
        const skill = this.skills.find((s: any) => s.id === skillId);
        return skill ? skill.name : 'None';
      })
      .join(', ');
  }

  deleteProject(project: Project) {
    this.deletedProject.emit(project);
  }
  openModal(project?: Project) {
    if (project) {
      this.selectedProject = project;
    } else {
      this.selectedProject = null;
    }
  }
}
