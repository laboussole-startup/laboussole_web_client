import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertListCardComponent } from './expert-list-card.component';

describe('ExpertListCardComponent', () => {
  let component: ExpertListCardComponent;
  let fixture: ComponentFixture<ExpertListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertListCardComponent]
    });
    fixture = TestBed.createComponent(ExpertListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
