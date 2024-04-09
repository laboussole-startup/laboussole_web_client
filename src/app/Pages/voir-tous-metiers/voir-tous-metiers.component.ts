import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Metier } from 'src/app/Models/metier';
import { OffreFormationService } from 'src/app/services/offre-formation.service';

@Component({
  selector: 'app-voir-tous-metiers',
  templateUrl: './voir-tous-metiers.component.html',
  styleUrls: ['./voir-tous-metiers.component.scss']
})
export class VoirTousMetiersComponent {

  constructor(
    private service: OffreFormationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;
  // formation!: Formations[];
  metiers!: Metier[];
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
    this.getScreenWidth = window.innerWidth;
    // this.getScreenWidth <= 480? this.mobile = true : this.mobile = false;

    this.service.getFormations().subscribe((data: any) => {
      console.log(data);
      this.metiers = data.results;
      // console.log(this.formations);
    });
    // this.formations = this.service.getFormation();
  }

  navigateToDetails(itemId: string) {
    this.router.navigate(['/metiers', itemId]); // Navigate to details route with item ID
  }

  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }
}
