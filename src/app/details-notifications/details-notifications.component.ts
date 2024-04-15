import { Component, OnInit} from '@angular/core';
import { Notification } from '../Models/notification';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-details-notifications',
  templateUrl: './details-notifications.component.html',
  styleUrls: ['./details-notifications.component.scss']
})
export class DetailsNotificationsComponent {

  currentNotification!:Notification;

  constructor(private notificationsService:NotificationsService){

  }

  ngOnInit(){
    this.fetchNotification();
  }

  fetchNotification(){
    this.notificationsService.getNotificationById(this.notificationsService.currentNotificationId).subscribe(
      (data:any)=>{
        console.log(data);
        this.currentNotification = data as Notification
      }
    )
  }

}
