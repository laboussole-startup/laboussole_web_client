import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objectif-placeholder',
  templateUrl: './objectif-placeholder.component.html',
  styleUrls: ['./objectif-placeholder.component.scss']
})
export class ObjectifPlaceholderComponent {
  readonly panelOpenState = signal(false);
  readonly panelOpenState2 = signal(false);

  constructor(private router:Router){

  }

  goToSearchExepert(){
    this.router.navigateByUrl("/consulter-expert")
  }
  goToMetiers(){
    this.router.navigateByUrl("/metiers")
  }
}
