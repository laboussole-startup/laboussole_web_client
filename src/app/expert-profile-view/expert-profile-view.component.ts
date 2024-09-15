import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expert-profile-view',
  templateUrl: './expert-profile-view.component.html',
  styleUrls: ['./expert-profile-view.component.scss']
})
export class ExpertProfileViewComponent {
@Input() details:any;
@Output() backToList = new EventEmitter<any>;

backToExpertList(){
  this.backToList.emit("true")
}
}
