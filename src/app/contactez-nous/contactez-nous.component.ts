import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.scss']
})
export class ContactezNousComponent {
  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;
  isLoggedIn:boolean=false;

  ngOnInit(){
    window.scrollTo(0,0);
  }
  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

}
