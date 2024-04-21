import { Component, HostListener, OnInit,DoCheck,Renderer2, ElementRef, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/Models/universite';
import { OffreFormationService } from 'src/app/services/offre-formation.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent {
  constructor(
    private service: OffreFormationService,
    private router: Router,
    private route: ActivatedRoute,
    private searchService:SearchService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  query:string="";

  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;
  // formation!: Formations[];
  formations!: Universite[];
  // formations: any;
  showSideBar = false;
  overlay!:HTMLDivElement | null;

  public getScreenWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);
    // this.getScreenWidth <= 480? this.mobile = true : this.mobile = false;
    // 768px portrait

    // console.log(this.mobile);
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.enableScroll();
    this.getScreenWidth = window.innerWidth;
    // this.getScreenWidth <= 480? this.mobile = true : this.mobile = false;

    this.service.getUniversites().subscribe((data: any) => {
      console.log(data);
      this.formations = data;
      // console.log(this.formations);
    });
    // this.formations = this.service.getFormation();
  }

  ngDoCheck(){
    window.scrollTo(0,0);
  }
  navigateToDetails(itemId: number) {
    this.router.navigate(['/universites', itemId]); // Navigate to details route with item ID
  }

  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

  handleClick(){
    console.log('yes');
  }

  onEnterKeyPressed(){
    this.searchService.setSearchQuery("");
    this.searchService.setFormationsQuery(this.query);
    this.searchService.setMetiersQuery("");
    this.router.navigateByUrl("/search-results")
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

  showMobileMenu(){
    const menu:HTMLDivElement =  this.elementRef.nativeElement.querySelector('.mobileMenu');
    console.log(menu)
    if (menu) {
      this.overlay = document.createElement('div');
        this.overlay.style.position = 'fixed';
        this.overlay.style.top = '0';
        this.overlay.style.left = '0';
        this.overlay.style.width = '100%';
        this.overlay.style.height = '100%';
        this.overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Adjust transparency here
        this.overlay.style.zIndex = '2'; // Ensure it's on top of everything else
        document.body.appendChild(this.overlay);
      console.log("menu is ok")
      menu.style.display = 'block';
      menu.style.position = 'fixed'; // Position the element relative to the viewport
      menu.style.top = '0'; // Position it at the top of the viewport
      menu.style.left = '0'; // Position it at the left of the viewport
      menu.style.width = '80%'; // Make it occupy the full width of the viewport
      menu.style.height = '100%'; // Make it occupy the full height of the viewport
      menu.style.zIndex = '3'; // Ensure it's on top of other elements
    
      // Optionally, you can set other styles as needed, such as background color or transparency
      menu.style.backgroundColor = 'rgba(255, 255, 255)'; // Semi-transparent black background
    }

  }

  hideOverlay() {
    if (this.overlay && this.overlay.parentNode) {
        this.overlay.parentNode.removeChild(this.overlay);
        this.overlay = null; // Reset overlay reference
    }
  }

  closeMenu(){
    this.hideOverlay();
    const menu:HTMLDivElement =  this.elementRef.nativeElement.querySelector('.mobileMenu');
    if(menu){
      menu.style.display = 'none';
    }

  }
}
