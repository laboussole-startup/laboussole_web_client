import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logged-in-nav-header',
  templateUrl: './logged-in-nav-header.component.html',
  styleUrls: ['./logged-in-nav-header.component.scss']
})
export class LoggedInNavHeaderComponent {

  @Output() menuIconClosed = new EventEmitter<void>();

  showSearchBar = false;

  hideMenuIcon = false;

  showDropdown = false;

  // Call this method when you want to open the menu
  openMenu() {
    this.menuIconClosed.emit();
  }

}
