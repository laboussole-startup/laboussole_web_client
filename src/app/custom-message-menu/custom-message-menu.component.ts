import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-message-menu',
  templateUrl: './custom-message-menu.component.html',
  styleUrls: ['./custom-message-menu.component.scss']
})
export class CustomMessageMenuComponent {
  title = 'messaging-interface';
  @Input()
  all_messages_count:number=0;
  @Input()
  all_favorite_count:number=0;
  @Input()
  unread_message_count:number=0;

  @Output() privateMessageOnly = new EventEmitter<any>;
  @Output() groupMessageOnly = new EventEmitter<any>;

  onPrivateMessageChange(event: any) {
    console.log(`Private Message Filter: ${event.checked}`);
    this.privateMessageOnly.emit(event.checked)
  }

  onGroupMessageChange(event: any) {
    console.log(`Group Message Filter: ${event.checked}`);
    this.groupMessageOnly.emit(event.checked)
  }
}
