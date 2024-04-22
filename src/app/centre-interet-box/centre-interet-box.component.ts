import { Component,Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-centre-interet-box',
  templateUrl: './centre-interet-box.component.html',
  styleUrls: ['./centre-interet-box.component.scss']
})
export class CentreInteretBoxComponent {

  @Input() text_val:string="default";
  @Input() id:Number = 0;
  @Output() eventEmitter = new EventEmitter<string>();
  clicked:boolean = false;


  changeState(){
    this.clicked = ! this.clicked;
    this.eventEmitter.emit(this.text_val);
  }
}
