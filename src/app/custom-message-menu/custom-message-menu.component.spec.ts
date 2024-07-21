import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMessageMenuComponent } from './custom-message-menu.component';

describe('CustomMessageMenuComponent', () => {
  let component: CustomMessageMenuComponent;
  let fixture: ComponentFixture<CustomMessageMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMessageMenuComponent]
    });
    fixture = TestBed.createComponent(CustomMessageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
