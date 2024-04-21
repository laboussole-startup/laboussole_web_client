import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculte } from 'src/app/Models/faculte';
import { FiliereFormation } from 'src/app/Models/filiere-formation';
import { OffreFormationService } from 'src/app/services/offre-formation.service';
import { MatDialog} from '@angular/material/dialog';
import { AskLoginDialogComponent } from 'src/app/ask-login-dialog/ask-login-dialog.component';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-details-facultes',
  templateUrl: './details-facultes.component.html',
  styleUrls: ['./details-facultes.component.scss']
})
export class DetailsFacultesComponent {


  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  panelOpenState = false;
  hideAll:boolean = false;

  // about service
  filiereId!: any;
  filiereItem!: Faculte;
  filieresLicence!: FiliereFormation[];
  filieresMaster!: FiliereFormation[];
  missions!: string[];

  constructor(
    private filiereRoute: ActivatedRoute,
    private service: OffreFormationService,
    private router: Router,
    public dialog: MatDialog,
    private userService:UserServiceService,
    private elementRef: ElementRef
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
    })

    
    

    // this.metierItem = this.service.getCartItemById(this.metierId); // Retrieve specific cart item details
  }
  navigateToParent(itemId: number) {
    this.router.navigate(['/universites', itemId]); // Navigate to details route with item ID
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
  onScroll40Percent() {
    // Your function logic when the user has scrolled 40% of the page
    console.log('User has scrolled 40% of the page');
    if(!this.userService.user_email){
      const fortyPercentElement:HTMLDivElement = this.elementRef.nativeElement.querySelector('#blurMark');
      fortyPercentElement.style.filter = 'blur(2.5px)';
      this.hideAll=true;
    }else{
      this.hideAll=false;
    }
   
  }
}
