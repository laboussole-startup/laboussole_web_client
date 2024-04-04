import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  isLoggedIn:boolean=false;

  ngOnInit(){
  }
  nextImage(){

  }
  prevImage(){
    
  }
  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

}
