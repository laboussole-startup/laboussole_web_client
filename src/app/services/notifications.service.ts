import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private root_url:string='https://api.laboussole-edu.com/notifications/';
  public currentNotificationId:number = 0;

  public unreadNotifs = new Set();

  public displayNotificationList:boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  getAllNotifications(){
   return this.httpClient.get(this.root_url);
  }
  postNotification(
    titre:any,
    contenu:any,
    statut:any,
    nationalité:any,
    date:any,
    image_pc:any,
    image_tablette:any,
    image_telephone:any,
    expiration_date:any,
  ){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    });
    let id:any = localStorage.getItem('user_id');
    let url:string = 'https://api.laboussole-edu.com/notifications/';
    return this.httpClient.post(url,{
      "titre":titre,
      "date":date,
      "statut":statut,
      "contenu":contenu,
      "nationalité":nationalité,
      "image_pc":image_pc,
      "image_tablette":image_tablette,
      "image_telephone":image_telephone,
      "sender_id":id,
      "expiration_date":expiration_date.toISOString(),
      
    },{ headers:headers });
  }
  getNotificationById(id:number){
   return this.httpClient.get(this.root_url+id+'/');
  }
  setCurrentNotification(id:number){
    this.currentNotificationId=id;
  }
  addUnReadNotification(id:number){
   this.unreadNotifs.add(id)
    localStorage.setItem('notifications',this.unreadNotifs.size+'');
  }
  reduceUnReadNotifications(id:number){
    this.unreadNotifs.delete(id)
    localStorage.setItem('notifications',this.unreadNotifs.size+'');
  }

}
