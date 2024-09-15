import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertProfileViewComponent } from './expert-profile-view.component';

describe('ExpertProfileViewComponent', () => {
  let component: ExpertProfileViewComponent;
  let fixture: ComponentFixture<ExpertProfileViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertProfileViewComponent]
    });
    fixture = TestBed.createComponent(ExpertProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
