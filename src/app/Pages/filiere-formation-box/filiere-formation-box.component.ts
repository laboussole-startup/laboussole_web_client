import { Component, Input } from '@angular/core';
import { Universite } from 'src/app/Models/universite';

@Component({
  selector: 'app-filiere-formation-box',
  templateUrl: './filiere-formation-box.component.html',
  styleUrls: ['./filiere-formation-box.component.scss']
})
export class FiliereFormationBoxComponent {
  @Input() formationBox!: Universite;
}
