import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expert-plan-list-template',
  templateUrl: './expert-plan-list-template.component.html',
  styleUrls: ['./expert-plan-list-template.component.scss']
})
export class ExpertPlanListTemplateComponent {

  @Input() plan_action:any;

}
