import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessagesService } from '../services/chat-messages.service';

@Component({
  selector: 'app-expert-dashboard',
  templateUrl: './expert-dashboard.component.html',
  styleUrls: ['./expert-dashboard.component.scss']
})
export class ExpertDashboardComponent {
  panel_number:number=1;
  exp_id:any;
changePanel(n: number) {
  this.panel_number=n;
}


  constructor(private expertRoute: ActivatedRoute,private chatService:ChatMessagesService){
    
  }
  ngOnInit(){
    this.exp_id=this.expertRoute.snapshot.paramMap.get('expert_id'); 
    console.log("route id is"+this.exp_id)
  }

  privateMessageEventResponse(e:any){
    console.log(e)
    this.chatService.enterChat=true;
    this.chatService.messages = e;
    this.changePanel(2);
  }

  groupMessageEventResponse(e:any){
    console.log(e)
    this.chatService.enterChat=true;
    this.chatService.messages = e;
    this.changePanel(2)
  }
}
