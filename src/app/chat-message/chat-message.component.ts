import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent {
  @Input()
  text!: string;
  @Input()
  timestamp!: string;
  @Input()
  isSent!: boolean;
  @Input()
  isImage!:boolean
  @Input()
  imageUrl!:string;
  @Input()
  isAudio!:boolean;
  @Input()
  audioUrl!:string;
  @Input()
  isDocument!:boolean;
  @Input()
  documentUrl!:string;
  @Input()
  documentName!:string;
  @Input()
  isVideo!:boolean;
  @Input()
  videoUrl!:string;
 

  ngOnInit(){
    console.log("chat message says is image is ",this.isImage)
  }
}
