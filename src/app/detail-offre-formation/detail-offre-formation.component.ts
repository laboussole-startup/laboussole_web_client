import { Component, ElementRef, HostListener } from '@angular/core';
import { Metier } from '../Models/metier';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreFormationService } from '../services/offre-formation.service';
import { map } from 'rxjs';
import { FiliereFormation } from '../Models/filiere-formation';
import { Faculte } from '../Models/faculte';
import { Universite } from '../Models/universite';
import { MatDialog} from '@angular/material/dialog';
import { AskLoginDialogComponent } from 'src/app/ask-login-dialog/ask-login-dialog.component';
import { UserServiceService } from '../services/user-service.service';

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
  linked_filiere!:FiliereFormation;
  linked_faculte!:Faculte;
  lieu:Map<Faculte,Universite> = new Map();
  hideAll:boolean=false;

  scrollTimeout: any; 
  constructor(
    private metierRoute: ActivatedRoute,
    private service: OffreFormationService,
    public dialog: MatDialog,
    private userService:UserServiceService,
    private router:Router,
    private elementRef: ElementRef
  ) {}


  ngOnInit() {

    window.scrollTo(0,0)
    this.metierId = this.metierRoute.snapshot.paramMap.get('id_metiers'); // Get cart item ID from route
    console.log(this.metierId);

    if(!this.userService.user_email){
      const fortyPercentElement:HTMLDivElement = this.elementRef.nativeElement.querySelector('#blurMark1');
      fortyPercentElement.style.filter = 'blur(2.5px)';
      this.hideAll=true;
    }else{
      this.hideAll=false;
    }
    

    if (this.metierId) {
      this.service
        .getMetierDetails(this.metierId)
        .subscribe((response: any) => {
          console.log("returned with metier details")
          // console.log(response);
          this.metierItem = response;
          this.competences = this.metierItem.competencescles.split(',');
          this.missions = this.metierItem.principales_missions.split(',');
          console.log(this.metierItem);
          console.log(this.competences);
          /**
           * 
           *  this.service.getFiliereDetails(this.metierItem.filieres).subscribe(
            (data:any) =>{
              console.log("fetched for filiere")
              console.log(data);
              this.linked_filiere = data as FiliereFormation;



              this.service.getFacultes(this.linked_filiere.faculte).subscribe(
                (data:any)=>{
                  console.log("fetched faculte");
                  console.log(data)
                  this.linked_faculte = data as Faculte;
                }
              )

              this.service.getSimilarFilieres(this.linked_filiere.nom).subscribe(
                (data)=>{
                  console.log(data);
                  let a:Array<FiliereFormation> = data as Array<FiliereFormation>;

                  for(let fil of a){
                    console.log(fil)
                    this.service.getFacultes(fil.faculte).subscribe(
                      (data:any)=>{
                        
                        let f = data as Faculte;
                        console.log(f)

                        this.service.getUniversiteDetails(f.universite).subscribe(
                          (data:any)=>{
                            let u = data as Universite;
                            console.log(u);
                            this.lieu.set(f,u);
                            const observer = new IntersectionObserver((entries) => {
                              entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                  // Call your function here
                                  this.onScroll40Percent();
                                  observer.disconnect(); // Disconnect the observer to avoid further observations
                                }
                              });
                            }, { threshold: 0.8 }); // Use a threshold of 0.4 to trigger when 40% of the observed element is visible
                        
                            // Identify the element that represents the 40% mark of the page
                            const fortyPercentElement = this.elementRef.nativeElement.querySelector('#blurMark');
                            
                            // Start observing the element
                            observer.observe(fortyPercentElement);
                          }
                        )

                      }
                    )
                  }
                }
              )

            }
          )
           * 
           */
         

        
        });
    }

    // this.metierItem = this.service.getCartItemById(this.metierId); // Retrieve specific cart item details
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AskLoginDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  //aside
  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }

  handleClick(sectionId: string){
    console.log(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = sectionElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
     }else{
      console.log("section not found")
     }
  }
  goToFaculte(id:number){
    console.log(id);
    this.router.navigate(['/facultes/', id]);
  }

  onScroll40Percent() {
    // Your function logic when the user has scrolled 40% of the page
    console.log('User has scrolled 40% of the page');
   
  }
}

