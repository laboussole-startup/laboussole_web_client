import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertMessageContentChatComponent } from './expert-message-content-chat.component';

describe('ExpertMessageContentChatComponent', () => {
  let component: ExpertMessageContentChatComponent;
  let fixture: ComponentFixture<ExpertMessageContentChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertMessageContentChatComponent]
    });
    fixture = TestBed.createComponent(ExpertMessageContentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
