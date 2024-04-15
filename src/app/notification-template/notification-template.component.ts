import { Component,Input } from '@angular/core';
import { Notification } from '../Models/notification';

@Component({
  selector: 'app-notification-template',
  templateUrl: './notification-template.component.html',
  styleUrls: ['./notification-template.component.scss']
})
export class NotificationTemplateComponent {
  @Input() notification!:Notification
}
