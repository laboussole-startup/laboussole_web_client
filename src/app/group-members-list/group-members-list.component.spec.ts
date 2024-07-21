import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMembersListComponent } from './group-members-list.component';

describe('GroupMembersListComponent', () => {
  let component: GroupMembersListComponent;
  let fixture: ComponentFixture<GroupMembersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupMembersListComponent]
    });
    fixture = TestBed.createComponent(GroupMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
