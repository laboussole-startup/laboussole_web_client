import { Component,OnInit,Renderer2 } from '@angular/core';

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

  constructor(private renderer: Renderer2){
  
  }

  ngOnInit(){
    this.enableScroll();
    window.scrollTo(0,0);
  }
  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

  enableScroll(): void {
    // Retrieve the scroll position from the body's top style property
    const scrollY = parseInt(document.body.style.top || '0', 10);
  
    // Remove the applied CSS to enable scrolling
    this.renderer.removeStyle(document.body, 'overflow');
    this.renderer.removeStyle(document.body, 'position');
    this.renderer.removeStyle(document.body, 'top');
  
    // Restore the scroll position
    window.scrollTo(0, Math.abs(scrollY));
  }

}
