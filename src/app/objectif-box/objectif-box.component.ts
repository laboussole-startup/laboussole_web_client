import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-objectif-box',
  templateUrl: './objectif-box.component.html',
  styleUrls: ['./objectif-box.component.scss']
})
export class ObjectifBoxComponent {
  @Output() showPlan = new EventEmitter<any>();

  constructor(){
    
  }

  notifyToShowPlan(){
    this.showPlan.emit("")
  }
}
