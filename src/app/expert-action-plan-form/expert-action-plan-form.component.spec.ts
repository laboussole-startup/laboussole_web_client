import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertActionPlanFormComponent } from './expert-action-plan-form.component';

describe('ExpertActionPlanFormComponent', () => {
  let component: ExpertActionPlanFormComponent;
  let fixture: ComponentFixture<ExpertActionPlanFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertActionPlanFormComponent]
    });
    fixture = TestBed.createComponent(ExpertActionPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
