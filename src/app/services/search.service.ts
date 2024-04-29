import { Injectable } from '@angular/core';
import { Faculte } from '../Models/faculte';
import { Metier } from '../Models/metier';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchQuery:string="";
  public formationQuery:string="";
  public metierQuery:string="";
  searchingCategory:boolean = false;
  public showMetierReccomandations:boolean = false;
  public metierRecommandations:Array<Metier> = new Array();
  public showFormationsReccomandations:boolean = false;
  public formationsReccomandations:Array<Faculte> = new Array();

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
