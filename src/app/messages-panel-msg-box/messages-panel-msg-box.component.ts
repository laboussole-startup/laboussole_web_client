import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-messages-panel-msg-box',
  templateUrl: './messages-panel-msg-box.component.html',
  styleUrls: ['./messages-panel-msg-box.component.scss']
})
export class MessagesPanelMsgBoxComponent {
  isSelected: boolean = false;
  isFavorite: boolean = false;
  longPressTimeout: any;
  recent_deselect:boolean = false;

  @Input()
  name!: string;
  @Input()
  content!: string;
  @Input()
  timestamp!: Date;
  @Input()
  id!:string;
  @Input()
  unread!:number;

  
  @Output() messageClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    let last_read_message_time_str = localStorage.getItem(this.id);
    let last_read_message_time = new Date(1990, 0, 1);

    let unread_msgs_in_current_chat:number=0;
      if(last_read_message_time_str){
        last_read_message_time = new Date(last_read_message_time_str)
      }
    if(this.timestamp<=last_read_message_time){
      this.unread=0;
    }
  }

  toggleSelection(): void {
    this.isSelected = !this.isSelected;
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation(); // Prevent triggering the selection toggle
    this.isFavorite = !this.isFavorite;
  }

  onRightClick(event: MouseEvent): void {
    event.preventDefault(); // Prevent the default context menu from appearing
    this.toggleSelection();
  }

  onMouseDown(event: MouseEvent): void {
    console.log('clicked')
    if(this.isSelected){
      this.toggleSelection();
      this.recent_deselect=true;
    }else{
      this.recent_deselect=false;
    }
    this.longPressTimeout = setTimeout(() => {
      if(this.isSelected){
        this.recent_deselect=true;
      }else{
        this.recent_deselect=true;
      }
      this.toggleSelection();
    }, 1500); // 500ms for long press
  }
  
  onMouseUp(event: MouseEvent): void {
    clearTimeout(this.longPressTimeout);
    console.log(this.recent_deselect)
    if(!this.recent_deselect){
      console.log('trying to emit naah')
      this.messageClicked.emit(this.id);
    }

  }
}
