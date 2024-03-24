import { Component, Input } from '@angular/core';
import { FiliereFormation } from 'src/app/Models/filiere-formation';

@Component({
  selector: 'app-filiere-formation-box',
  templateUrl: './filiere-formation-box.component.html',
  styleUrls: ['./filiere-formation-box.component.scss']
})
export class FiliereFormationBoxComponent {
  @Input() formationBox!: FiliereFormation;
}
