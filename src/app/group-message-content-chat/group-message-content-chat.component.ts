import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-group-message-content-chat',
  templateUrl: './group-message-content-chat.component.html',
  styleUrls: ['./group-message-content-chat.component.scss']
})
export class GroupMessageContentChatComponent {
  messages = [
    { text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', timestamp: '6:30 pm', sent: false },
    { text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.', timestamp: '6:34 pm', sent: true },
    { text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.', timestamp: '6:38 pm', sent: false }
  ];

  @Output() backToMessageList = new EventEmitter<string>();
  @Output() showGroupMembers = new EventEmitter<string>();


  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, timestamp: new Date().toLocaleTimeString(), sent: true });
      this.newMessage = '';
    }
  }

  backToList(){
    this.backToMessageList.emit("back");
    console.log("logging back")
  }

  showMembers(){
    this.showGroupMembers.emit("id");
    console.log("logging back to show more members");
  }
}
