import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {

  public enterChat:boolean = false;

  public chatId:string = "";

  public messages:any;

  constructor(){

   }
}
