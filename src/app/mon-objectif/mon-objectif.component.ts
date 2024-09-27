import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-mon-objectif',
  templateUrl: './mon-objectif.component.html',
  styleUrls: ['./mon-objectif.component.scss']
})
export class MonObjectifComponent {
  show_action_plan:boolean = false;
  action_object:any;
  is_objective_set:boolean = false;
  current_objective:any;

  constructor(private userService:UserServiceService, private firestore:Firestore){

  }

  async getUserObjectiveByUserId(userId: number) {
    try {
      // Reference the 'user_objectives' collection
      const userObjectivesRef = collection(this.firestore, 'user_objectives');

      // Create a query to fetch the document where user_id matches the specified value
      const q = query(userObjectivesRef, where('user_id', '==', userId));

      // Execute the query and get the documents
      const querySnapshot = await getDocs(q);

      // Check if we have documents and return the first match
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data(); // Returns the document data
      } else {
        console.log('No matching documents found');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user objective: ', error);
      return null;
    }
  }

  ngOnInit(){
    let ob = localStorage.getItem('is_objective_set');
    let id:number = localStorage.getItem('user_id') as unknown as number;
    if(ob=='true'){
      this.is_objective_set=true;
      this.getUserObjectiveByUserId(id);
    }
    else if(this.userService.chosen_objective){
      this.is_objective_set = true;
      this.current_objective=this.userService.chosen_objective;
      console.log(this.current_objective);

    }
  }

  showActionPlan(e:any){
    this.show_action_plan=true;
    this.action_object=e;
  }
  hideActionPlan(e:any){
    this.show_action_plan=false;
    this.action_object=null
  }
}
