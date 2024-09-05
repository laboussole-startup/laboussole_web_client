import { Component,Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input()
  senderName!: string;
  @Input()
  messageTitle!: string;
  @Input()
  timestamp!: string;
  @Input()
  isPrivate!: boolean
  @Input()
  Id!:string

  @Output() messageEvent = new EventEmitter<string>();

  sendEvent(){
    console.log("sending ",this.Id)
    this.messageEvent.emit(this.Id);
  }
  constructor(){

  }
}
