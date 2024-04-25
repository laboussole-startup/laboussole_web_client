import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputTemoignageDialogComponent } from '../input-temoignage-dialog/input-temoignage-dialog.component';

@Component({
  selector: 'app-temoignages-input',
  templateUrl: './temoignages-input.component.html',
  styleUrls: ['./temoignages-input.component.scss']
})
export class TemoignagesInputComponent {

  constructor(public dialog: MatDialog){

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(InputTemoignageDialogComponent, {
      width: '280px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  laisserTemoignage(){ 
  }

}
