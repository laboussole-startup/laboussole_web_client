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

  private firestore: Firestore;

  constructor(private expertRoute:ActivatedRoute,private mfirestore: Firestore, private router:Router,
    private userService:UserServiceService, public chatMessage:ChatMessagesService){
      this.firestore = mfirestore;
  }

  ngOnInit(){
    const participantId = 1; // Replace with the actual participant ID
    this.getGroupChatsByParticipant(participantId).subscribe((groupChats: any) => {
      console.log('****************Group Chats from group-panel**************************')
      this.groupChats=groupChats;
      console.log(this.groupChats);
      let user_id:any = localStorage.getItem('user_id');
      console.log("user id is ",user_id);
      
      
    });
  }

  displayGroupChat(id:any){
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
