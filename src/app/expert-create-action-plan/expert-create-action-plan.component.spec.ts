import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCreateActionPlanComponent } from './expert-create-action-plan.component';

describe('ExpertCreateActionPlanComponent', () => {
  let component: ExpertCreateActionPlanComponent;
  let fixture: ComponentFixture<ExpertCreateActionPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertCreateActionPlanComponent]
    });
    fixture = TestBed.createComponent(ExpertCreateActionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
