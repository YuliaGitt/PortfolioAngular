import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFormsComponent } from './portfolio-forms.component';

describe('PortfolioFormsComponent', () => {
  let component: PortfolioFormsComponent;
  let fixture: ComponentFixture<PortfolioFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioFormsComponent]
    });
    fixture = TestBed.createComponent(PortfolioFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
