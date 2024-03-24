import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiliereFormation } from 'src/app/Models/filiere-formation';
import { OffreFormationService } from 'src/app/services/offre-formation.service';

@Component({
  selector: 'app-details-filieres',
  templateUrl: './details-filieres.component.html',
  styleUrls: ['./details-filieres.component.scss']
})
export class DetailsFilieresComponent {

  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  // about service
  filiereId!: any;
  filiereItem!: FiliereFormation;
  competences!: string[];
  missions!: string[];

  constructor(
    private filiereRoute: ActivatedRoute,
    private service: OffreFormationService
  ) {}

  ngOnInit() {
    this.filiereId = this.filiereRoute.snapshot.paramMap.get('id_metiers'); // Get cart item ID from route
    console.log(this.filiereId);

    if (this.filiereId) {
      this.service
        .getMetierDetails(this.filiereId)
        .subscribe((response: any) => {
          // console.log(response);
          this.filiereItem = response;
          // this.competences = this.filiereItem.competencescles.split(',');
          // this.missions = this.filiereItem.principales_missions.split(',');
          console.log(this.filiereItem);
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
}
