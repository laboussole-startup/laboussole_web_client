import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-expert-message-filter-bar',
  templateUrl: './expert-message-filter-bar.component.html',
  styleUrls: ['./expert-message-filter-bar.component.scss']
})
export class ExpertMessageFilterBarComponent {



  @Output() unreadMessageFilter = new EventEmitter<string>();
  @Output() privateMessageFilter = new EventEmitter<string>();
  @Output() groupMessageFilter= new EventEmitter<string>();
  @Output() favorisMessageFilter = new EventEmitter<string>();
  @Output() allMessagesFilter = new EventEmitter<string>();


  resetFilters(){
   
  }
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    console.log("date change was called")
    let selectedDate:Date = event.value as Date
    console.log('Selected date: ', selectedDate);
  
  }
  onSelectionChange(event: MatSelectChange) {
    const selectedValue = event.value;
    console.log('Selected value:', selectedValue);

    if (selectedValue === '1') {
      this.unreadMessageFilter.emit("unread_filter")
    } else if (selectedValue === '2') {
     this.privateMessageFilter.emit("private_filter")
    } else if(selectedValue == '3'){
      this.groupMessageFilter.emit("group message")
    }else if(selectedValue == '4'){
      this.favorisMessageFilter.emit("favoris_filter")
    }else if(selectedValue == '0'){
      this.allMessagesFilter.emit("all messages")
    }
  }
  constructor(){
    
  }
}
