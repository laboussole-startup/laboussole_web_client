import { Component,Input } from '@angular/core';

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
  isPrivate!: boolean;
}
