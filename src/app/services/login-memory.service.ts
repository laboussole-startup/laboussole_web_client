import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginMemoryService {

  isLoginFromNotification:boolean=false;
  lastNotificationId:number = 0;

  constructor() { }
}
