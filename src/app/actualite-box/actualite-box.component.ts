import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-actualite-box',
  templateUrl: './actualite-box.component.html',
  styleUrls: ['./actualite-box.component.scss']
})
export class ActualiteBoxComponent {
@Input() image:string = ""
@Input() date:string = ""
@Input() title:string = ""
@Input() description:string = ""
@Input() tags:string = ""
}
