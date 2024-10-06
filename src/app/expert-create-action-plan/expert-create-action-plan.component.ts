import { Component } from '@angular/core';
import { Firestore, collection, query, where, collectionData, arrayUnion, doc, getDocs, updateDoc, addDoc } from '@angular/fire/firestore';
import { Observable,take } from 'rxjs';

@Component({
  selector: 'app-expert-create-action-plan',
  templateUrl: './expert-create-action-plan.component.html',
  styleUrls: ['./expert-create-action-plan.component.scss']
})
export class ExpertCreateActionPlanComponent {

  show_form:boolean = false;

  constructor(private firestore: Firestore){
    
  }

  ngOnInit(){
    let id = localStorage.getItem('user_id');  // Ensure id is a number
    this.getExpertObjectiveByUserId(id).then(
      (data: any) => {
        console.log(data);
        // Check if `data` is an array before spreading
        if (Array.isArray(data)) {
          this.plan_action.push(...data);
        } else {
          this.plan_action.push(data)
          console.error("Data is not an array:", data);
        }
      }
    ).catch((error) => {
      console.error("Error fetching expert objective:", error);
    });
  }

  plan_action:any[] =[ 
   
  ]
  showForm(){
    this.show_form=true;
  }
  hideForm(){
    this.show_form=false;
  }
  receiveActionPlan(e:any){
    this.show_form=false;
    this.plan_action.push(e);

  }

  async getExpertObjectiveByUserId(userId: any) {
    try {
      // Reference the 'user_objectives' collection
      const userObjectivesRef = collection(this.firestore, 'expert_action_plans');

      // Create a query to fetch the document where user_id matches the specified value
      const q = query(userObjectivesRef, where('expert_id', '==', userId));

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
}
