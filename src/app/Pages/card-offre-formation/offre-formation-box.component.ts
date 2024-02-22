import { Component, Input } from '@angular/core';
import { Formations } from 'src/app/Models/formations';

@Component({
  selector: 'app-offre-formation-box',
  templateUrl: './offre-formation-box.component.html',
  styleUrls: ['./offre-formation-box.component.scss']
})
export class OffreFormationBoxComponent {

  @Input() formationBox!: Formations;
}
