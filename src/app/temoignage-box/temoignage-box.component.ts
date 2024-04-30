import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temoignage-box',
  templateUrl: './temoignage-box.component.html',
  styleUrls: ['./temoignage-box.component.scss']
})
export class TemoignageBoxComponent {

  @Input() score: number = 3.5;
  @Input() image_url: string | undefined = ""
  @Input() name: string = "Name"
  @Input() description: string = "description";

  counterArray: number[] = new Array(5);

  constructor(){
   
  }
}
