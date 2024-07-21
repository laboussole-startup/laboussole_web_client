import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() messageClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
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
      this.messageClicked.emit('paul');
    }

  }
}
