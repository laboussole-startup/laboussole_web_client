import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-mobile-header',
  templateUrl: './nav-mobile-header.component.html',
  styleUrls: ['./nav-mobile-header.component.scss']
})
export class NavMobileHeaderComponent {
  @Output() menuIconClosed = new EventEmitter<void>();
  
  showSearchBar = false;

  hideMenuIcon = false;

  showDropdown = false;

  // Call this method when you want to open the menu
  openMenu() {
    this.menuIconClosed.emit();
  }
  toggleSearchBar(){

  }
}
