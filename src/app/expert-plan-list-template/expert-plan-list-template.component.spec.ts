import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertPlanListTemplateComponent } from './expert-plan-list-template.component';

describe('ExpertPlanListTemplateComponent', () => {
  let component: ExpertPlanListTemplateComponent;
  let fixture: ComponentFixture<ExpertPlanListTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertPlanListTemplateComponent]
    });
    fixture = TestBed.createComponent(ExpertPlanListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
