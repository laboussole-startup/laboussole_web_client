import { Component,OnInit,DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculte } from 'src/app/Models/faculte';
import { Universite } from 'src/app/Models/universite';
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
  filiereItem!: Universite;
  facultes: Array<Faculte> = new Array()
  ecoles:Array<Faculte> = new Array()
  faculte_id!:number;
  missions!: string[];

  constructor(
    private filiereRoute: ActivatedRoute,
    private service: OffreFormationService,
    private router: Router
  ) {}
  ngOnInit() {
    window.scrollTo(0,0);
    this.filiereId = this.filiereRoute.snapshot.paramMap.get('universite_id'); // Get cart item ID from route
    console.log(this.filiereId);

    if (this.filiereId) {
      this.service
        .getUniversiteDetails(this.filiereId)
        .subscribe((response: any) => {
          console.log(response);
          this.filiereItem = response;
          // this.competences = this.filiereItem.competencescles.split(',');
          // this.missions = this.filiereItem.principales_missions.split(',');
          console.log(this.filiereItem);
          // console.log(this.competences);
        });
    }
    this.service.getFaculteUniv(this.filiereId).subscribe((data: any) => {
      console.log(data);
      let filter:Array<Faculte> = data as Array<Faculte>;
      const sub="faculté";

      for(let f of filter){
        console.log(f)
        console.log(f.nom.toLowerCase().includes(sub))
        if(f.nom.toLowerCase().includes(sub)){
          this.facultes.push(f);
        }else{
          this.ecoles.push(f);
        }
      }

    })

   

    // this.metierItem = this.service.getCartItemById(this.metierId); // Retrieve specific cart item details
  }

  ngDoCheck(){
    window.scrollTo(0,0);
  }
  navigateToDetails(itemId: number) {
    this.router.navigate(['/facultes/', this.faculte_id]); // Navigate to details route with item ID
  }

  onIdFromChild(id: number){
    console.log(id);
    this.faculte_id=id;
  }

  //aside
  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }
}
