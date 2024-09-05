import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-group-item-card',
  templateUrl: './group-item-card.component.html',
  styleUrls: ['./group-item-card.component.scss']
})
export class GroupItemCardComponent {
  isSelected: boolean = false;
  isFavorite: boolean = false;
  longPressTimeout: any;
  recent_deselect:boolean = false;


  @Input() title:string = "";

  @Input() members:Array<any> = []
  
  @Output() groupClicked = new EventEmitter<string>();

  ngOnInit(){
    console.log("title is ",this.title);
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
    }, 500); // 500ms for long press
  }
  
  onMouseUp(event: MouseEvent): void {
    clearTimeout(this.longPressTimeout);
    console.log(this.recent_deselect)
    if(!this.recent_deselect){
      console.log('trying to emit naah')
      this.groupClicked.emit('paul');
    }

  }

}
