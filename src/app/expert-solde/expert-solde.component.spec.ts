import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSoldeComponent } from './expert-solde.component';

describe('ExpertSoldeComponent', () => {
  let component: ExpertSoldeComponent;
  let fixture: ComponentFixture<ExpertSoldeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertSoldeComponent]
    });
    fixture = TestBed.createComponent(ExpertSoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
