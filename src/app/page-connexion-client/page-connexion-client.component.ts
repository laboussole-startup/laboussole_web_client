import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-page-connexion-client',
  templateUrl: './page-connexion-client.component.html',
  styleUrls: ['./page-connexion-client.component.scss']
})
export class PageConnexionClientComponent {

 email:string = "";
 password:string = "";

 emailControl = new FormControl('', [Validators.required, Validators.email]);
 errorMessage = 'Email invalide ou déjà pris';

 passwordControl = new FormControl('', [Validators.required]);
 passerrormsg = 'obligatoire';

 constructor(private userService:UserServiceService,private router:Router){

 }
 checkLogin(){
  this.userService.login(this.emailControl.value,this.passwordControl.value).subscribe((data)=>
  {
    console.log(data);
    if(data.hasOwnProperty("access") && data.hasOwnProperty("refresh")){
      console.log("valid login");
      this.router.navigate(['/']);
    }else{
      
      
    }
  });
 }

  hide:boolean = true;
}
