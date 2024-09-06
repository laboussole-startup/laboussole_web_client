import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatMessagesService } from '../services/chat-messages.service';
import { UserServiceService } from '../services/user-service.service';
import { Firestore, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { Timestamp } from 'firebase/firestore'; // Firebase Timestamp

@Component({
  selector: 'app-expert-message-content-chat',
  templateUrl: './expert-message-content-chat.component.html',
  styleUrls: ['./expert-message-content-chat.component.scss']
})
export class ExpertMessageContentChatComponent {

  messages:Array<any> = [];

  @Output() backToMessageList = new EventEmitter<string>();
  isGroupChat:boolean=false;

  chatDetails:any;
  standardizedMessages:Array<any> = new Array();
  title:string="";

  constructor(private chatMessage:ChatMessagesService,
    private userService:UserServiceService,
    private firestore: Firestore){

  }


  ngOnInit(){
    this.chatDetails = this.chatMessage.messages;
    if(this.chatDetails.Participants){
      this.isGroupChat=true;
    }
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
      let  timestamp:Date = dt;

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

  pushMessage() {
    if (this.newMessage.trim()) {
      let user_id:number = localStorage.getItem('user_id') as unknown as number
      this.standardizedMessages.push({ text: this.newMessage, timestamp: new Date(), isSent: true });
      if(this.isGroupChat){
        this.sendGroupMessage(this.chatMessage.messages.id,this.newMessage,user_id)
      }else{
        this.sendPrivateMessage(this.chatMessage.messages.id,this.newMessage,user_id)
      }
      
      console.log(this.chatMessage.messages.id)
      this.newMessage = '';

    }
  }

  backToList(){
    this.backToMessageList.emit("back");
  }

  async sendPrivateMessage(chatId: string, message: string, senderId: number) {
    const chatDocRef = doc(this.firestore, `privateChats/${chatId}`);

    // Create the new message object
    const newMessage = {
      content: message,
      date_sent: Timestamp.now(),
      sender: senderId,
    };

    try {
      // Update the document by pushing the new message to the message_list array
      await updateDoc(chatDocRef, {
        message_list: arrayUnion(newMessage),
        last_message_date_sent: Timestamp.now(), // Also update the last message time
      });
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  }

  async sendGroupMessage(chatId: string, message: string, senderId: number) {
    const chatDocRef = doc(this.firestore, `groupChats/${chatId}`);

    // Create the new message object
    const newMessage = {
      content: message,
      date_sent: Timestamp.now(),
      sender: senderId,
    };

    try {
      // Update the document by pushing the new message to the message_list array
      await updateDoc(chatDocRef, {
        message_list: arrayUnion(newMessage),
        last_message_date_sent: Timestamp.now(), // Also update the last message time
      });
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  }

}
