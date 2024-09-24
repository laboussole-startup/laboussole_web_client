import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifPlaceholderComponent } from './objectif-placeholder.component';

describe('ObjectifPlaceholderComponent', () => {
  let component: ObjectifPlaceholderComponent;
  let fixture: ComponentFixture<ObjectifPlaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectifPlaceholderComponent]
    });
    fixture = TestBed.createComponent(ObjectifPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
