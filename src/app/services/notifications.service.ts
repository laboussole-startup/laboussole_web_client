import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private root_url:string='https://laboussole-back-end.onrender.com/notifications/';
  public currentNotificationId:number = 0;

  constructor(private httpClient: HttpClient) {
  }

  getAllNotifications(){
   return this.httpClient.get(this.root_url);
  }
  getNotificationById(id:number){
   return this.httpClient.get(this.root_url+id+'/');
  }
  setCurrentNotification(id:number){
    this.currentNotificationId=id;
  }
}
