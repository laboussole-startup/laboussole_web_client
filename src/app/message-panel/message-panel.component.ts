import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent {

  enter_discussion:boolean=false;
 
  
  messages: Array<Message> = [
    { name: "Jullu Jalal", preview: "Our Bachelor of Co ...", time: "8:38 AM", favorite: true },
    // Add more messages as needed
  ];

  backToList(e:any){
    this.enter_discussion=false;
  }
  
  renderMessages() {
    const messageList = document.querySelector('.message-list');
    if (messageList) {
      messageList.innerHTML = '';
  
      this.messages.forEach(message => {
        const messageEntry = document.createElement('div');
        messageEntry.classList.add('message-entry');
  
        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
  
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
  
        const name = document.createElement('h4');
        name.textContent = message.name;
  
        const preview = document.createElement('p');
        preview.textContent = message.preview;
  
        const time = document.createElement('span');
        time.classList.add('time');
        time.textContent = message.time;
  
        messageContent.appendChild(name);
        messageContent.appendChild(preview);
  
        messageEntry.appendChild(avatar);
        messageEntry.appendChild(messageContent);
        messageEntry.appendChild(time);
  
        if (message.favorite) {
          const starIcon = document.createElement('span');
          starIcon.classList.add('star-icon');
          starIcon.textContent = '*';
          messageEntry.appendChild(starIcon);
        }
  
        messageList.appendChild(messageEntry);
      });
    }

    
  }

 
  

  constructor(){
    
  }
  ngOnInit(){
    document.addEventListener('DOMContentLoaded', () => {
      this.renderMessages();
    });
    
  }

  enterDiscussion(e:any){
    console.log('entering discussion')
    this.enter_discussion = true;
    console.log(e);
  }
  

  
}

interface Message {
  name: string;
  preview: string;
  time: string;
  favorite: boolean;
}
