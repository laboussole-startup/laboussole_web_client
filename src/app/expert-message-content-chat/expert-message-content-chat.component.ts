import { Component, EventEmitter, Output } from '@angular/core';
import { ChatMessagesService } from '../services/chat-messages.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-expert-message-content-chat',
  templateUrl: './expert-message-content-chat.component.html',
  styleUrls: ['./expert-message-content-chat.component.scss']
})
export class ExpertMessageContentChatComponent {
  messages:Array<any> = [];

  @Output() backToMessageList = new EventEmitter<string>();

  chatDetails:any;
  standardizedMessages:Array<any> = new Array();
  title:string="";

  constructor(private chatMessage:ChatMessagesService,private userService:UserServiceService){

  }


  ngOnInit(){
    this.chatDetails = this.chatMessage.messages;
    if(this.chatDetails.Nom){
      this.title = this.chatDetails.Nom
    }else{
      let user_id:any = localStorage.getItem('user_id');
      let membs = this.chatDetails.Membres;
          let recipient_id:any;
          if(membs[0]==user_id){
            
            recipient_id = membs[1];
            console.log("recipient id is ",recipient_id)
          }else{
            recipient_id=membs[0];
          }
          this.userService.getUserNameById(recipient_id).subscribe((name:any)=> {
           this.title = name.username;
          },
          (error: any)=>{
            console.error(error);
          }
          )
    }
    this.messages = this.chatMessage.messages.message_list;
    let last_message = this.messages[this.messages.length-1];
    console.log("**** message_list *************",this.messages)
    console.log("last group message id is",this.chatMessage.chatId);

    const milliseconds = last_message.date_sent.seconds * 1000 + last_message.date_sent.nanoseconds / 1e6;
    // Create Date object
    const date = new Date(milliseconds);

    const dateString = date.toISOString();

    // Step 2: Save the string in localStorage
    localStorage.setItem(this.chatMessage.messages.id, dateString);
    for(let message of this.messages){
      let txt:string = message.content;
      const milliseconds = message.date_sent.seconds * 1000 + message.date_sent.nanoseconds / 1e6;
      // Create Date object
      const dt = new Date(milliseconds);
      let  timestamp:string = message.dt;

      let user_id:any = localStorage.getItem('user_id');
      let isSt:boolean=false;

      if(message.sender){
        isSt = user_id == message.sender;
      }else{
        isSt = user_id == message.sender_id;
      }

      
      
      this.standardizedMessages.push(
        {
          text:txt,
          timestamp:timestamp,
          isSent:isSt
        }
      )
    }
    //console.log("chat details is ",this.chatDetails)
  }


  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, timestamp: new Date().toLocaleTimeString(), sent: true });
      this.newMessage = '';
    }
  }

  backToList(){
    this.backToMessageList.emit("back");
  }

}
