import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupItemCardComponent } from './group-item-card.component';

describe('GroupItemCardComponent', () => {
  let component: GroupItemCardComponent;
  let fixture: ComponentFixture<GroupItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupItemCardComponent]
    });
    fixture = TestBed.createComponent(GroupItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
