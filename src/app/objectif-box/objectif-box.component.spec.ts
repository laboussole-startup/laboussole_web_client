import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifBoxComponent } from './objectif-box.component';

describe('ObjectifBoxComponent', () => {
  let component: ObjectifBoxComponent;
  let fixture: ComponentFixture<ObjectifBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectifBoxComponent]
    });
    fixture = TestBed.createComponent(ObjectifBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
