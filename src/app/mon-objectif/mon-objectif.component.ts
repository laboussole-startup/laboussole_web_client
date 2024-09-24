import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-objectif',
  templateUrl: './mon-objectif.component.html',
  styleUrls: ['./mon-objectif.component.scss']
})
export class MonObjectifComponent {
  show_action_plan:boolean = false;
  action_object:any;
  is_objective_set:boolean = false;

  showActionPlan(e:any){
    this.show_action_plan=true;
    this.action_object=e;
  }
  hideActionPlan(e:any){
    this.show_action_plan=false;
    this.action_object=null
  }
}
