import { Component,Input } from '@angular/core';
import { Notification } from '../Models/notification';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notification-template',
  templateUrl: './notification-template.component.html',
  styleUrls: ['./notification-template.component.scss']
})
export class NotificationTemplateComponent {
  @Input() notification!:Notification

  constructor(private notificationService:NotificationsService){}

  checkUnReadNotification(id:number):boolean{
    const value = localStorage.getItem('notification'+id);
    if(value){
      return false;
    }else{
      this.notificationService.addUnReadNotification(id);
      return true;
    }
   
  }
}
