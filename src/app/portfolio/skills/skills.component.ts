import { Component, OnInit } from '@angular/core';
import { ApiServicePortfolio } from '../api-portfolio.service';
import { Skill } from '../portfolio-models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  constructor(private apiService: ApiServicePortfolio) {}
  ngOnInit() {
    this.apiService.get_skills().subscribe(
      (data) => {
        this.skills = data;
      },
      (error) => console.log(error)
    );
  }
}
