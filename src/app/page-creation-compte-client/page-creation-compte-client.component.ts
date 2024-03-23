import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-creation-compte-client',
  templateUrl: './page-creation-compte-client.component.html',
  styleUrls: ['./page-creation-compte-client.component.scss']
})
export class PageCreationCompteClientComponent {
  hide:boolean = true;
  nom:string ="";
  prenom:string="";
  email:string="";
  password:string="";
  confirmPassword:string="";

 
 nameControl = new FormControl('', [Validators.required]);


 emailControl = new FormControl('', [Validators.required, Validators.email]);
 errorMessage = 'Email invalide ou déjà pris';

 passwordControl = new FormControl('', [Validators.required]);
 passerrormsg = 'obligatoire';

 confirmPasswordControl= new FormControl('', [Validators.required]);

conditionsControl = new FormControl('',[Validators.required])


  constructor(private userService:UserServiceService,private router:Router){

  }

  creerCompte() {
    console.log([this.nom, this.prenom, this.email, this.password]);
    this.userService.createCompte(this.nom, this.prenom, this.email, this.password)
      .then((response) => {
        console.log(response);
        if(response.status==201){
          this.userService.updateUserEmail(this.email);
          this.router.navigate(['/signup-success']);
        }
      })
      .catch((error) => {
        console.log(error);
            this.router.navigate(['/signup-error']);
      });
  }
}
