import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertNavBarComponent } from './expert-nav-bar.component';

describe('ExpertNavBarComponent', () => {
  let component: ExpertNavBarComponent;
  let fixture: ComponentFixture<ExpertNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertNavBarComponent]
    });
    fixture = TestBed.createComponent(ExpertNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
