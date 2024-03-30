import { Component } from '@angular/core';
import { Metier } from '../Models/metier';
import { ActivatedRoute } from '@angular/router';
import { OffreFormationService } from '../services/offre-formation.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-detail-offre-formation',
  templateUrl: './detail-offre-formation.component.html',
  styleUrls: ['./detail-offre-formation.component.scss'],
})
export class DetailOffreFormationComponent {
  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  // about service
  metierId!: any;
  metierItem!: Metier;
  competences!: string[];
  missions!: string[];

  constructor(
    private metierRoute: ActivatedRoute,
    private service: OffreFormationService
  ) {}

  ngOnInit() {
    this.metierId = this.metierRoute.snapshot.paramMap.get('id_metiers'); // Get cart item ID from route
    console.log(this.metierId);

    if (this.metierId) {
      this.service
        .getMetierDetails(this.metierId)
        .subscribe((response: any) => {
          // console.log(response);
          this.metierItem = response;
          this.competences = this.metierItem.competencescles.split(',');
          this.missions = this.metierItem.principales_missions.split(',');
          console.log(this.metierItem);
          console.log(this.competences);
        });
    }

    // this.metierItem = this.service.getCartItemById(this.metierId); // Retrieve specific cart item details
  }

  //aside
  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

  handleClick(sectionId: string){
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'})
  }
}
