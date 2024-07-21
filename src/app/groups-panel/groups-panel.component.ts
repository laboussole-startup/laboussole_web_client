import { Component } from '@angular/core';

@Component({
  selector: 'app-groups-panel',
  templateUrl: './groups-panel.component.html',
  styleUrls: ['./groups-panel.component.scss']
})
export class GroupsPanelComponent {
  show_chat:boolean=false;
  display_group_members:boolean = false;

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
}
