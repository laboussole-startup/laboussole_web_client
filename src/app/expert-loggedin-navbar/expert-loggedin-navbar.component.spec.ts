import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertLoggedinNavbarComponent } from './expert-loggedin-navbar.component';

describe('ExpertLoggedinNavbarComponent', () => {
  let component: ExpertLoggedinNavbarComponent;
  let fixture: ComponentFixture<ExpertLoggedinNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertLoggedinNavbarComponent]
    });
    fixture = TestBed.createComponent(ExpertLoggedinNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
