import { Component, inject, signal } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-expert-action-plan-form',
  templateUrl: './expert-action-plan-form.component.html',
  styleUrls: ['./expert-action-plan-form.component.scss']
})
export class ExpertActionPlanFormComponent {

  action_plan_steps:any[] = [];


  readonly panelOpenState = signal(false);
  
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    client_email: ['', Validators.required],
    client_objective: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    duration: ['', Validators.required],
    ressources:['', Validators.required],
    cost:['', Validators.required] 
  });
  isLinear = false;

  addActionToList(){
    if(this.secondFormGroup.valid){
      this.action_plan_steps.push({
        title:this.secondFormGroup.get('title')?.value,
        description:this.secondFormGroup.get('description')?.value,
        duration:this.secondFormGroup.get('duration')?.value,
        ressources:this.secondFormGroup.get('ressources')?.value,
        cost:this.secondFormGroup.get('cost')?.value
      })
    }
    
  }
}

