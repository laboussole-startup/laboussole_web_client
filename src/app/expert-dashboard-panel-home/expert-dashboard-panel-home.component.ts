import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Expert } from '../Models/expert';
import { ExpertServiceService } from '../services/expert-service.service';
import { Firestore, collection, query, where, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-expert-dashboard-panel-home',
  templateUrl: './expert-dashboard-panel-home.component.html',
  styleUrls: ['./expert-dashboard-panel-home.component.scss']
})
export class ExpertDashboardPanelHomeComponent {
  userName: string="";
  date?: Date;
  d!:string;
  totalgains:any;

  @Input() exp_id:any;

  groupChats$: Observable<any[]> = new Observable<any[]>();

  private firestore: Firestore;

  constructor(private expertService:ExpertServiceService,private mfirestore: Firestore){
    this.firestore = mfirestore;
 
  }

  ngOnInit(){
    this.d =  this.date ? this.date.toLocaleDateString() : new Date().toLocaleDateString();
    let res:string | null = localStorage.getItem('is_expert');

    if(res == 'yes'){
      this.expertService.getExpertInfo(this.exp_id).subscribe(
        (data: any)=>{
          console.log(data);
          let expert:Expert = data as Expert;
          console.log(expert);
          this.userName = expert.nom;
          this.totalgains = expert.montant_commission;
        },
        (error: any)=>{
          console.error(error);
        }
      )

      const participantId = 1; // Replace with the actual participant ID
      this.getGroupChatsByParticipant(participantId).subscribe((groupChats: any) => {
        console.log('****************Group Chats**************************')
        console.log(groupChats);
      });
      this.getPrivateChatsByParticipant(participantId).subscribe((privateChats: any) => {
        console.log('****************Private Chats**************************')
        console.log(privateChats);
      });
     
    }

    const date = this.date ? this.date.toLocaleDateString() : new Date().toLocaleDateString();
    const greeting = `Welcome sur votre tableau de bord ${this.userName}!`;

    const dateElement = document.querySelector('.card .date');
    console.log(dateElement)
    const greetingElement = document.querySelector('.card h1');
    console.log(greetingElement)

    if (dateElement) {
      console.log("date elements exists")
        dateElement.textContent = `Date du jour ${date}`;
    }

    if (greetingElement) {
      console.log("greeting elements exists")
        greetingElement.textContent = greeting;
    }
  }

  getGroupChatsByParticipant(participantId: number): Observable<any[]> {
    const groupChatsRef = collection(this.firestore, 'groupChats');
    const q = query(groupChatsRef, where('Participants', 'array-contains', participantId));
    return collectionData(q, { idField: 'id' });
  }

  getPrivateChatsByParticipant(participantId: number): Observable<any[]> {
    const privateChatsRef = collection(this.firestore, 'privateChats');
    const q = query(privateChatsRef, where('Membres', 'array-contains', participantId));
    return collectionData(q, { idField: 'id' });
  }
}
