import { Component, HostListener, OnInit,DoCheck,Renderer2, } from '@angular/core';
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
    private renderer: Renderer2
  ) {}

  query:string="";

  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;
  // formation!: Formations[];
  formations!: Universite[];
  // formations: any;
  showSideBar = false;

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
}
