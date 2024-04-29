import { Component, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Faculte } from 'src/app/Models/faculte';
import { Universite } from 'src/app/Models/universite';
import { OffreFormationService } from 'src/app/services/offre-formation.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-voir-tout-formations',
  templateUrl: './voir-tout-formations.component.html',
  styleUrls: ['./voir-tout-formations.component.scss']
})
export class VoirToutFormationsComponent {

  constructor(
    private service: OffreFormationService,
    private router: Router,
    private route: ActivatedRoute,
    private searchService:SearchService
  ) {}

  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;
  query:string = "";
  // formation!: Formations[];
  formations!: Universite[];
  reccomandations!:Array<Faculte>;
  showingRecs:boolean = false;
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
    this.getScreenWidth = window.innerWidth;
    // this.getScreenWidth <= 480? this.mobile = true : this.mobile = false;


    if(this.searchService.showFormationsReccomandations){

      this.reccomandations = this.searchService.formationsReccomandations;
      this.showingRecs=true;

  }else{
    this.service.getUniversites().subscribe((data: any) => {
      console.log(data);
      this.formations = data;
      // console.log(this.formations);
    });
  }
    
    // this.formations = this.service.getFormation();
  }

  navigateToDetails(itemId: number) {
    if(this.showingRecs){
      this.router.navigate(['/facultes', itemId]);
      
    }else{
      this.router.navigate(['/universites', itemId]); // Navigate to details route with item ID
    }
    
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
