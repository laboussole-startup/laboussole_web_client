import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-plan-action-list',
  templateUrl: './plan-action-list.component.html',
  styleUrls: ['./plan-action-list.component.scss']
})
export class PlanActionListComponent {
  readonly panelOpenState = signal(false);

  @Output() backToActionList = new EventEmitter<any>();
  @Input()
  action_plan!: any[];

  has_plan:boolean = false;

  constructor(){

  }

  ngAfterViewInit(){
    if(this.action_plan){
      console.log("action plan size ",this.action_plan.length)
    }
  }

  signalBackToList(){
    this.backToActionList.emit("");
  }
}
