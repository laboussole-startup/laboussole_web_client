import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentreInteret } from '../Models/centreInteret';
import { CentreInteretsService } from '../services/centre-interets.service';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-centre-interets',
  templateUrl: './centre-interets.component.html',
  styleUrls: ['./centre-interets.component.scss']
})
export class CentreInteretsComponent {

  All_Centres:Array<CentreInteret> = [];
  choices:Set<Number> = new Set<Number>();
  start:number=0;
  disablebtn:boolean = false;

  constructor(private centreInteretService:CentreInteretsService,private userService:UserServiceService,private router:Router){

  }


  ngOnInit(): void {
    this.centreInteretService.getCentresInterets().subscribe(data => {
      console.log(data);
      for (let d of data) {
        if (d.hasOwnProperty("id") && d.hasOwnProperty("nom") && d.hasOwnProperty("filieres_id") && d.hasOwnProperty("imageurl")) {
          this.All_Centres.push(
            new CentreInteret(d.id, d.nom, d.filieres_id, d.imageurl)
          );
        }
      }
    });
  }
  getSubArray<T>(array: T[], start: number, end: number): T[] {
    // Ensure start index is within bounds
    if(start>array.length-11 && start>0){
      this.disablebtn = true;
    }
    start = Math.max(start, 0);
    // Ensure end index is within bounds
    end = Math.min(end, array.length - 1);
    // Return the subarray between start and end indices using slice
    return array.slice(start, end + 1); // +1 to include the element at end index
}

saveChoice(data:Number){
  if(this.choices.has(data)){
    this.choices.delete(data);
  }else{
    this.choices.add(data);
  }
  console.log(this.choices);
   
}
terminateProcess(){
  console.log(Array.from(this.choices))
  this.userService.updateCentreInterets(Array.from(this.choices)).subscribe(data =>{
    console.log(data);
    this.router.navigate(['/']);
  });
  
}
  
}
