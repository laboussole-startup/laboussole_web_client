import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculte } from 'src/app/Models/faculte';
import { FiliereFormation } from 'src/app/Models/filiere-formation';
import { OffreFormationService } from 'src/app/services/offre-formation.service';

@Component({
  selector: 'app-details-facultes',
  templateUrl: './details-facultes.component.html',
  styleUrls: ['./details-facultes.component.scss']
})
export class DetailsFacultesComponent {


  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  // about service
  filiereId!: any;
  filiereItem!: Faculte;
  filieresLicence!: FiliereFormation[];
  filieresMaster!: FiliereFormation[];
  missions!: string[];

  constructor(
    private filiereRoute: ActivatedRoute,
    private service: OffreFormationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.filiereId = this.filiereRoute.snapshot.paramMap.get('faculte_id'); // Get cart item ID from route
    console.log(this.filiereId);

    if (this.filiereId) {
      this.service
        .getFacultes(this.filiereId)
        .subscribe((response: any) => {
          console.log(response);
          this.filiereItem = response;
          // this.competences = this.filiereItem.competencescles.split(',');
          // this.missions = this.filiereItem.principales_missions.split(',');
          console.log(this.filiereItem);
          // console.log(this.competences);
        });
    }
    this.service.getFiliereFac(this.filiereId).subscribe((data: any) => {
      console.log(data);  
      this.filieresLicence = data;
    })
    this.service.getFiliereFacMaster(this.filiereId).subscribe((data: any) => {
      console.log(data);  
      this.filieresMaster = data;
    })

    
    

    // this.metierItem = this.service.getCartItemById(this.metierId); // Retrieve specific cart item details
  }
  navigateToDetails(itemId: number) {
    this.router.navigate(['/universites', itemId]); // Navigate to details route with item ID
  }

  //aside
  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }
}
