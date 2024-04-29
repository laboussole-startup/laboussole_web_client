import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputTemoignageDialogComponent } from '../input-temoignage-dialog/input-temoignage-dialog.component';
import { Temoignage } from '../Models/temoignage';
import { User } from '../Models/user';
import { UserInfo } from '../Models/userInfo';
import { TemoignageService } from '../services/temoignage.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-temoignages-input',
  templateUrl: './temoignages-input.component.html',
  styleUrls: ['./temoignages-input.component.scss']
})
export class TemoignagesInputComponent {

  temoignageList:Array<Temoignage> = new Array()
  picturesMap:Map<string,string> = new Map();

  constructor(public dialog: MatDialog,
    private temoignageService:TemoignageService,
    private userService:UserServiceService
    ){

  }

  ngOnInit(){
    this.reloadTemoignages();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(InputTemoignageDialogComponent, {
      width: '280px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  
    // Subscribe to the afterClosed() method to get a callback when the dialog is closed
    dialogRef.afterClosed().subscribe((result) => {
      // 'result' contains the data passed from the dialog when it is closed
      console.log('Dialog was closed with result:', result);
      // Add any additional logic here
      this.reloadTemoignages();
    });
  }

  laisserTemoignage(){ 
  }

  reloadTemoignages(){
    this.temoignageService.getTemoignages().subscribe(
      (data:any)=>{
        console.log(data);
        let d = data as Array<Temoignage>

        for(let tem of d){
          this.userService.getUserByMail(tem.nom).subscribe(
            (data:any)=>{
              console.log(data);
              let us = data as UserInfo
              tem.nom = us.username
              if(us.photo_de_profil){
                this.picturesMap.set(tem.nom,us.photo_de_profil)
              }
              
            }
          )
        }
        this.temoignageList = d.reverse();
      }
    )
  }
}
