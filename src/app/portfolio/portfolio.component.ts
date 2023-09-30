import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Project, Skill, Education } from './portfolio-models';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  editedProject: any;

  ngOnInit() {}

  editProject(project: Project) {
    this.editedProject = project;
    console.log(this.editedProject);
  }
  newProject() {
    this.editedProject = { title: '', description: '' };
    console.log(this.editedProject);
  }
  deletedProject(project: Project) {
    // DELETE NOT WORKING
    console.log('DELETE', project.name);
  }
}
