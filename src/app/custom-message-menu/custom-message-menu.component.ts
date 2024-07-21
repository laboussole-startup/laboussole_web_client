import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-message-menu',
  templateUrl: './custom-message-menu.component.html',
  styleUrls: ['./custom-message-menu.component.scss']
})
export class CustomMessageMenuComponent {
  title = 'messaging-interface';

  onPrivateMessageChange(event: any) {
    console.log(`Private Message Filter: ${event.checked}`);
  }

  onGroupMessageChange(event: any) {
    console.log(`Group Message Filter: ${event.checked}`);
  }
}
