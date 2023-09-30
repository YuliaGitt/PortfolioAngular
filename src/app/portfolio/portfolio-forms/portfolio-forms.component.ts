import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Project } from '../portfolio-models';

@Component({
  selector: 'app-portfolio-forms',
  templateUrl: './portfolio-forms.component.html',
  styleUrls: ['./portfolio-forms.component.css'],
})
export class PortfolioFormsComponent {
  event: EventEmitter<any> = new EventEmitter();
  @Input() project = new EventEmitter<Project>();

  constructor(public bsModalRef: BsModalRef) {}

  closeAddModal() {
    const modelDiv = document.getElementById('projectAddModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  closeEditModal() {
    const modelDiv = document.getElementById('projectEditModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
}
