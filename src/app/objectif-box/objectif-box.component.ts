import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-objectif-box',
  templateUrl: './objectif-box.component.html',
  styleUrls: ['./objectif-box.component.scss']
})
export class ObjectifBoxComponent {
  @Output() showPlan = new EventEmitter<any>();
  @Input() job_title:string = "";
  @Input() job_description:string = "";
  @Input() has_plan:boolean = false;

  constructor(){
    
  }

  notifyToShowPlan(){
    this.showPlan.emit("")
  }
}
