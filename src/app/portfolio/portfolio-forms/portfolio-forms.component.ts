import {
  Component,
  EventEmitter,
  Input,
  ViewChild,
  OnInit,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ApiServicePortfolio } from '../api-portfolio.service';
import { Project, Skill } from '../portfolio-models';

@Component({
  selector: 'app-portfolio-forms',
  templateUrl: './portfolio-forms.component.html',
  styleUrls: ['./portfolio-forms.component.css'],
})
export class PortfolioFormsComponent implements OnInit {
  @Input() project?: Project;
  skills: Skill[] = [];

  constructor(private apiServicePortfolio: ApiServicePortfolio) {}

  ngOnInit() {
    this.apiServicePortfolio.get_skills().subscribe((data: Skill[]) => {
      this.skills = data;
    });
  }

  closeModal() {
    const modalDiv = document.getElementById('projectAddModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
}
