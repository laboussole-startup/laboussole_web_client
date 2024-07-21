import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPanelMsgBoxComponent } from './messages-panel-msg-box.component';

describe('MessagesPanelMsgBoxComponent', () => {
  let component: MessagesPanelMsgBoxComponent;
  let fixture: ComponentFixture<MessagesPanelMsgBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesPanelMsgBoxComponent]
    });
    fixture = TestBed.createComponent(MessagesPanelMsgBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
