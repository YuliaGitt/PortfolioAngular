import { Component, OnInit } from '@angular/core';
import { ApiServicePortfolio } from '../api-portfolio.service';
import { Education } from 'src/app/portfolio/portfolio-models';
@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css'],
})
export class EducationsComponent implements OnInit {
  educations: Education[] = [];

  constructor(private apiService: ApiServicePortfolio) {}

  ngOnInit() {
    this.apiService.get_educations().subscribe(
      (data) => {
        this.educations = data;
      },
      (error) => console.log(error)
    );
  }
}
