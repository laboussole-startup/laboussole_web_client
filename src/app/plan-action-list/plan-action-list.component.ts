import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-plan-action-list',
  templateUrl: './plan-action-list.component.html',
  styleUrls: ['./plan-action-list.component.scss']
})
export class PlanActionListComponent {
  readonly panelOpenState = signal(false);

  @Output() backToActionList = new EventEmitter<any>();

  constructor(){

  }

  signalBackToList(){
    this.backToActionList.emit("");
  }
}
