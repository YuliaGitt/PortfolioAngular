import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: any = [];
  educations: any = [];
  skills: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get_projects().subscribe(
      (data) => {
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
}
