import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-message-filter-bar',
  templateUrl: './expert-message-filter-bar.component.html',
  styleUrls: ['./expert-message-filter-bar.component.scss']
})
export class ExpertMessageFilterBarComponent {
  resetFilters(){
    const filterBy = document.getElementById('filterBy') as HTMLSelectElement;
    const date = document.getElementById('date') as HTMLInputElement;
    const payType = document.getElementById('payType') as HTMLSelectElement;

    filterBy.selectedIndex = 0;
    date.value = '';
    payType.selectedIndex = 0;
  }
  constructor(){
    
  }
}
