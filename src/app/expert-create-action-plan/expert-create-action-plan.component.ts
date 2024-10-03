import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-create-action-plan',
  templateUrl: './expert-create-action-plan.component.html',
  styleUrls: ['./expert-create-action-plan.component.scss']
})
export class ExpertCreateActionPlanComponent {

  show_form:boolean = false;

  plan_action = {
    client:"paul@gmail.com",
    objective:"Developpeur Web Full Stack",
    duree_total:2250,
    investissement_total:6250000,
    actions:[]
  }

  showForm(){
    this.show_form=true;
  }
  hideForm(){
    this.show_form=false;
  }
}
