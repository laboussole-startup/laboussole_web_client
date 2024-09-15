import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expert-list-card',
  templateUrl: './expert-list-card.component.html',
  styleUrls: ['./expert-list-card.component.scss']
})
export class ExpertListCardComponent {

  @Output() viewExpertDetail = new EventEmitter<any>
  @Input() expert_obj:any

  emitClickEvent(){
    this.viewExpertDetail.emit(this.expert_obj);
  }
}
