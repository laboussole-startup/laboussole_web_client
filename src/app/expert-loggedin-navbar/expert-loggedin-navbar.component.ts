import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-loggedin-navbar',
  templateUrl: './expert-loggedin-navbar.component.html',
  styleUrls: ['./expert-loggedin-navbar.component.scss']
})
export class ExpertLoggedinNavbarComponent {
  expandSearch() {
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
      searchBox.classList.add('expanded');
    }
  }

  collapseSearch() {
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
      searchBox.classList.remove('expanded');
    }
  }
}
