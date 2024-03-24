import { Component, Input } from '@angular/core';
import { Metier } from 'src/app/Models/metier';

@Component({
  selector: 'app-offre-formation-box',
  templateUrl: './offre-formation-box.component.html',
  styleUrls: ['./offre-formation-box.component.scss']
})
export class OffreFormationBoxComponent {

  @Input() metierBox!: Metier;
}
