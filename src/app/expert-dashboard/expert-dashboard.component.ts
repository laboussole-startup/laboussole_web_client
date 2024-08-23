import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expert-dashboard',
  templateUrl: './expert-dashboard.component.html',
  styleUrls: ['./expert-dashboard.component.scss']
})
export class ExpertDashboardComponent {
  panel_number:number=1;
  exp_id:any;
changePanel(n: number) {
  this.panel_number=n;
}

  


  constructor(private expertRoute: ActivatedRoute,){
    
  }
  ngOnInit(){
    this.exp_id=this.expertRoute.snapshot.paramMap.get('expert_id'); 
    console.log("route id is"+this.exp_id)
  }
}
