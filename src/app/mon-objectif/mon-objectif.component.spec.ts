import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonObjectifComponent } from './mon-objectif.component';

describe('MonObjectifComponent', () => {
  let component: MonObjectifComponent;
  let fixture: ComponentFixture<MonObjectifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonObjectifComponent]
    });
    fixture = TestBed.createComponent(MonObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
