import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertLoggedoutNavbarComponent } from './expert-loggedout-navbar.component';

describe('ExpertLoggedoutNavbarComponent', () => {
  let component: ExpertLoggedoutNavbarComponent;
  let fixture: ComponentFixture<ExpertLoggedoutNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertLoggedoutNavbarComponent]
    });
    fixture = TestBed.createComponent(ExpertLoggedoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
