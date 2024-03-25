import { Component,TemplateRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-page-connexion-client',
  templateUrl: './page-connexion-client.component.html',
  styleUrls: ['./page-connexion-client.component.scss']
})
export class PageConnexionClientComponent {

  @ViewChild('errorSheet') errorSheetTemplate = {} as TemplateRef<any>;

  sheetErrorMessage:string="";

 email:string = "";
 password:string = "";

 emailControl = new FormControl('', [Validators.required, Validators.email]);
 errorMessage = 'Email invalide ou déjà pris';

 passwordControl = new FormControl('', [Validators.required]);
 passerrormsg = 'obligatoire';

 constructor(private userService:UserServiceService,private router:Router,private bottomSheet: MatBottomSheet){

 }
 checkLogin(){
  console.log(this.email)
  this.userService.login(this.emailControl.value, this.passwordControl.value).subscribe(
    (data) => {
      //console.log(data);
      if (data.hasOwnProperty("access") && data.hasOwnProperty("refresh")) {
        console.log("valid login");
        this.userService.user_email = this.email;
        this.router.navigate(['/']);
      } else {
        this.sheetErrorMessage = "Erreur d'authentification. Veuillez vérifier vos informations de connexion.";
        this.openBottomSheet();
      }
    },
    (error) => {
      console.error("An error occurred:", error);
      // Handle error here, for example:
      
        this.sheetErrorMessage = "Erreur d'authentification. Veuillez vérifier vos informations de connexion.";
        this.openBottomSheet();
    
    }
  );
  
 }

 openBottomSheet(config?: MatBottomSheetConfig){
  this.bottomSheet.open(this.errorSheetTemplate, config);
}
closeBottomSheet(){
  this.bottomSheet.dismiss(this.errorSheetTemplate);
}

  hide:boolean = true;
}
