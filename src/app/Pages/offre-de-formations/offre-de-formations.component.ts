import { Component, HostListener, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Metier } from 'src/app/Models/metier';
import { OffreFormationService } from 'src/app/services/offre-formation.service';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-offre-de-formations',
  templateUrl: './offre-de-formations.component.html',
  styleUrls: ['./offre-de-formations.component.scss'],
})
export class OffreDeFormationsComponent {
  constructor(
    private service: OffreFormationService,
    private router: Router,
    private route: ActivatedRoute,
    private searchService:SearchService,
   
  ) {}

  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  query:string = "";
  // formation!: Formations[];
  metiers!: Metier[];
  initialMetierList:Array<Metier> = new Array()
  recommendationsList:Array<Metier> = new Array()
  popularMetierList:Array<Metier> = new Array()

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
  ngDoCheck(){
    window.scrollTo(0,0);
  }
  ngOnInit() {
  
    window.scrollTo(0,0);
    this.getScreenWidth = window.innerWidth;
    // this.getScreenWidth <= 480? this.mobile = true : this.mobile = false;

    this.service.getFormations().subscribe((data: any) => {
      console.log(data);
      this.metiers = data.results;
      let res:Array<Metier> = data.results as Array<Metier>

      this.initialMetierList = res.slice(0,10);
      this.popularMetierList = res.slice(20,25);
      this.recommendationsList= res.slice(30,35);
      // console.log(this.formations);
    });
   
  }

 

  navigateToDetails(itemId: string) {
    this.router.navigate(['/metiers', itemId]); // Navigate to details route with item ID
  }

  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

  onEnterKeyPressed(){
    this.searchService.setSearchQuery("");
    this.searchService.setFormationsQuery("");
    this.searchService.setMetiersQuery(this.query);
    this.router.navigateByUrl("/search-results")
  }
  
}
