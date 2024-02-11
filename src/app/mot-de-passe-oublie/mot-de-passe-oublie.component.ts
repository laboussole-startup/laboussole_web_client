import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.scss']
})
export class MotDePasseOublieComponent {

  hide:boolean = false;
  step1:boolean = false;
  step2:boolean = false;
  step3:boolean = false;
  successMessage:boolean = false;
  errorMessage:boolean = false;

    constructor(){
      this.changeStep(1);
    }

  verifyLogin():void{
    this.changeStep(4);
  }
  changeStep(step:number):void{
    if(step == 1){
       this.step1 = true;

       this.step2=false;
       this.step3=false;
       this.successMessage = false;
       this.errorMessage = false;

    } else if(step == 2){
      this.step2 = true;

      this.step1=false;
      this.step3=false;
      this.successMessage = false;
      this.errorMessage = false;
    }else if(step == 3){
      this.step3=true;

      this.step1=false;
      this.step2=false;
      this.successMessage = false;
      this.errorMessage = false;
    }else if(step==4){
      this.successMessage = true;

      this.step1=false;
      this.step2=false;
      this.step3 = false;
      this.errorMessage = false;
    }else if(step == 5){
      this.errorMessage = true;

      this.step1=false;
      this.step2=false;
      this.successMessage = false;
      this.step3 = false;
    }
  }

}


