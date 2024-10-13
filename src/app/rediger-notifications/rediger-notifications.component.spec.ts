import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedigerNotificationsComponent } from './rediger-notifications.component';

describe('RedigerNotificationsComponent', () => {
  let component: RedigerNotificationsComponent;
  let fixture: ComponentFixture<RedigerNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedigerNotificationsComponent]
    });
    fixture = TestBed.createComponent(RedigerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
