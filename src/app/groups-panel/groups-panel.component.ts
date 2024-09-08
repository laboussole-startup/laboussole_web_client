import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Expert } from '../Models/expert';
import { ExpertServiceService } from '../services/expert-service.service';
import { Firestore, collection, query, where, collectionData,orderBy } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { ChatMessagesService } from '../services/chat-messages.service';

@Component({
  selector: 'app-groups-panel',
  templateUrl: './groups-panel.component.html',
  styleUrls: ['./groups-panel.component.scss']
})
export class GroupsPanelComponent {
  show_chat:boolean=false;
  display_group_members:boolean = false;
  groupChats: Array<any> = [];
  groupChatsLastMessage:Array<any> = [];
  private chatsMap = new Map<string,any>();
  total_unread:number=0;
  iterable_map = new Map<string,any>();

  private firestore: Firestore;

  constructor(private expertRoute:ActivatedRoute,private mfirestore: Firestore, private router:Router,
    private userService:UserServiceService, public chatMessage:ChatMessagesService){
      this.firestore = mfirestore;
  }

  ngOnInit(){
    const participantId = 1; // Replace with the actual participant ID
    this.getGroupChatsByParticipant(participantId).subscribe((groupChats: any) => {
      console.log('****************Group Chats**************************')
      this.groupChats=groupChats;
      console.log(this.groupChats);
      let user_id:any = localStorage.getItem('user_id');
      console.log("user id is ",user_id);
      let i:number=0;
      for(let pc of this.groupChats){
        this.chatsMap.set(pc.id,pc);
        if(i==0){
          this.chatMessage.messages = pc;
        }
        let standChat:any;
        let membs = pc.Participants;
        console.log(membs);
        let last_message = pc.message_list[pc.message_list.length-1];

        console.log("last group message id is",pc.id);

        const milliseconds = last_message.date_sent.seconds * 1000 + last_message.date_sent.nanoseconds / 1e6;
        // Create Date object
        const date = new Date(milliseconds);

        console.log("date is ",date)
        console.log(pc.Nom);
        let current_chat_messages = pc.message_list;
        let last_read_message_time_str = localStorage.getItem(pc.id);
        let last_read_message_time = new Date(1990, 0, 1);

        let unread_msgs_in_current_chat:number=0;
        if(last_read_message_time_str){
          last_read_message_time = new Date(last_read_message_time_str)
        }

        for(let msg of current_chat_messages){
          let millis = msg.date_sent.seconds * 1000 + msg.date_sent.nanoseconds / 1e6;
          let msgDate = new Date(millis);

          if(last_read_message_time.getTime()<msgDate.getTime()){
            unread_msgs_in_current_chat+=1;
          }
        }
        this.total_unread+=unread_msgs_in_current_chat;
        this.iterable_map.set(pc.id,{
          name:pc.Nom,
          content:last_message.content,
          date:date,
          members:pc.Participants,
          id:pc.id,
          private:false,
          unread:unread_msgs_in_current_chat
        });
        this.groupChatsLastMessage.push({
          name:pc.Nom,
          content:last_message.content,
          date:date,
          members:pc.Participants,
          id:pc.id,
          private:false,
          unread:unread_msgs_in_current_chat
        });
        
      }

    });
  }

  displayGroupChat(id:any){
    console.log("#########################",id);
    this.show_chat=true;
    console.log("showing category "+this.show_chat)
  }

  backToMainPanel(e:any){
    console.log("loggedBack");
    this.show_chat=false;
    this.display_group_members=false;
  }

  showMoreMembers(e:any){
    this.show_chat=false;
    this.display_group_members=true;
  }
  getGroupChatsByParticipant(participantId: number): Observable<any[]> {
    const groupChatsRef = collection(this.firestore, 'groupChats');
    const q = query(
      groupChatsRef,
      where('Participants', 'array-contains', participantId),
      orderBy('last_message_date_sent', 'desc') // Adds ordering by last_message_date_sent in descending order
    );
    return collectionData(q, { idField: 'id' });
  }

  
}
