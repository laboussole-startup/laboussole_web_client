import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertMessageFilterBarComponent } from './expert-message-filter-bar.component';

describe('ExpertMessageFilterBarComponent', () => {
  let component: ExpertMessageFilterBarComponent;
  let fixture: ComponentFixture<ExpertMessageFilterBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertMessageFilterBarComponent]
    });
    fixture = TestBed.createComponent(ExpertMessageFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
