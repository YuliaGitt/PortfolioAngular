import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  getSkillName(skillIds: any[]) {
    return skillIds
      .map((skillId) => {
        const skill = this.skills.find((s: any) => s.id === skillId);
        return skill ? skill.name : 'None';
      })
      .join(', ');
  }

  createProject() {
    this.newProject.emit();
    console.log('CREATE NEW PROJECT');
  }

  deleteProject(project: Project) {
    this.deletedProject.emit(project);
  }
  openAddModal() {
    const modelDiv = document.getElementById('projectAddModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  openEditModal(project: Project) {
    this.editedProject.emit(project);
    const modelDiv = document.getElementById('projectEditModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
}
