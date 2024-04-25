import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-input-temoignage-dialog',
  templateUrl: './input-temoignage-dialog.component.html',
  styleUrls: ['./input-temoignage-dialog.component.scss']
})
export class InputTemoignageDialogComponent {

  selectedRating:number=0;
  text:string="";

  constructor(public dialogRef: MatDialogRef<InputTemoignageDialogComponent>){

  }

  noteRating(i:number){
    this.selectedRating=i;

  }
  enregistrerTemoignage(){

  }
}
