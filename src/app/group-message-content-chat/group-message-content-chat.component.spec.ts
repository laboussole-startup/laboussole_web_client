import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMessageContentChatComponent } from './group-message-content-chat.component';

describe('GroupMessageContentChatComponent', () => {
  let component: GroupMessageContentChatComponent;
  let fixture: ComponentFixture<GroupMessageContentChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupMessageContentChatComponent]
    });
    fixture = TestBed.createComponent(GroupMessageContentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
