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
  ngOnInit() {}

  // getProjects() {
  //   this.apiService.get_projects().subscribe(
  //     (data: any) => {
  //       this.projects = data;
  //     },
  //     (error) => console.log(error)
  //   );
}

// add_education() {
//   alert('ADD EDUCATION');
// }
