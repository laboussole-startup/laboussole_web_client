import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchQuery:string="";
  public formationQuery:string="";
  public metierQuery:string="";

  constructor() { 
    
  }

  setSearchQuery(s:string){
    this.searchQuery = s;
  }

  setFormationsQuery(s:string){
    this.formationQuery=s;
  }
  setMetiersQuery(s:string){
    this.metierQuery=s;
  }
}
