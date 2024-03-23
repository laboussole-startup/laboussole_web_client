import { Component,TemplateRef, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-page-creation-compte-client',
  templateUrl: './page-creation-compte-client.component.html',
  styleUrls: ['./page-creation-compte-client.component.scss']
})
export class PageCreationCompteClientComponent {

  @ViewChild('errorSheet') errorSheetTemplate = {} as TemplateRef<any>;

  hide:boolean = true;
  nom:string ="";
  prenom:string="";
  email:string="";
  password:string="";
  confirmPassword:string="";
  sheetErrorMessage:string="";

 
 nameControl = new FormControl('', [Validators.required]);


 emailControl = new FormControl('', [Validators.required, Validators.email]);
 errorMessage = 'Email invalide ou déjà pris';

 passwordControl = new FormControl('', [Validators.required]);
 passerrormsg = 'obligatoire';

 confirmPasswordControl= new FormControl('', [Validators.required]);

conditionsControl = new FormControl('',[Validators.required])


  constructor(private userService:UserServiceService,private router:Router,private bottomSheet: MatBottomSheet){

  }

  verifierCreerCompte(){
    if(this.nameControl.value=="" || this.emailControl.value=="" || this.passwordControl.value=="" || this.confirmPasswordControl.value==""){
      console.log("invalid form");
      this.sheetErrorMessage = "pensez a remplire les champs obligatoire";
      this.openBottomSheet();
    }else{
      if(this.passwordControl.value != this.confirmPasswordControl.value){
        console.log("invalid form");
        this.sheetErrorMessage = "mot de passes non identiques";
        this.openBottomSheet();
      }
      console.log("isValid");
    }
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

  openBottomSheet(config?: MatBottomSheetConfig){
    this.bottomSheet.open(this.errorSheetTemplate, config);
  }
  closeBottomSheet(){
    this.bottomSheet.dismiss(this.errorSheetTemplate);
  }
}
