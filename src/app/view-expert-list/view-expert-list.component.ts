import { Component } from '@angular/core';
import { ExpertServiceService } from '../services/expert-service.service';

@Component({
  selector: 'app-view-expert-list',
  templateUrl: './view-expert-list.component.html',
  styleUrls: ['./view-expert-list.component.scss']
})
export class ViewExpertListComponent {
  search_value:any;
  show_expert_detail:boolean = false;

  expert_to_present:any;
  all_experts:any[] = [];
  data_to_show:any[] = [];

  constructor(private expert_service:ExpertServiceService){

  }

ngOnInit(){
  this.expert_service.getAllExperts().subscribe(
    (data: any) => {
      console.log(data);
      this.all_experts=data;
      this.data_to_show=data;
    },
    (error: any) => {
      console.error(error);
    }
  );
  
}
showAll(){
  this.all_experts = this.data_to_show;
}
showOnlyCOs(){
this.all_experts = this.filterByRole(this.data_to_show,"conseiller");
}
showOnlyExperts(){
  this.all_experts = this.filterByRole(this.data_to_show,"expert_metier");
}

filterByRole(array:any[], role:string) {
  return array.filter(expert => expert.role === role);
}
  presentExpertDetail(e:any){
    console.log(e);
    this.expert_to_present=e;
    this.show_expert_detail=true;
  }
  showList(e:any){
    console.log(e);
    this.show_expert_detail=false;
  }
}
