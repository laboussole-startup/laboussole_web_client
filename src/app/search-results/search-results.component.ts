import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculte } from '../Models/faculte';
import { Metier } from '../Models/metier';
import { Universite } from '../Models/universite';
import { OffreFormationService } from '../services/offre-formation.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {


  defaultMetier:Metier=new Metier("1","dfs","fads","dfdasf","afds","afds","dsaf","dfas","dsfa","dsaf","dfsa","adfs");
  
  resultatsEcoles:Array<Faculte>=new Array()
  resultatsMetiers:Array<Metier>=new Array()
  resultatsUniversites:Array<Universite>=new Array()
  query:string="";

  count_metiers:number | null=0;
  next_link_metiers:string | null ="";

  constructor(private searchService:SearchService,
    private formationService:OffreFormationService,
    private router:Router
    ){

  }
  ngDoCheck(){
    window.scrollTo(0,0);
  }
  ngOnInit(){
    window.scrollTo(0,0)
    console.log(this.searchService.searchQuery);
    console.log(this.searchService.formationQuery);
    console.log(this.searchService.metierQuery);

    if(this.searchService.searchQuery != ""){
      this.query = this.searchService.searchQuery 
      this.formationService.searchEcoles(this.searchService.searchQuery).subscribe(
        (data:any)=>{
          console.log("*******LOGGING ECOLES***************");
          console.log(data);
          this.resultatsEcoles=data as Array<Faculte>;

        }
      );
      this.formationService.searchMetiers(this.searchService.searchQuery).subscribe(
        (data:any)=>{
          console.log("*******LOGGING METIERS***************");
          console.log(data);
          this.resultatsMetiers = data.results as Array<Metier>;
          if(data.results){
            this.next_link_metiers=data.next;
            this.count_metiers=data.count;
          }
        }
      );
      this.formationService.searchUniversites(this.searchService.searchQuery).subscribe(
        (data:any)=>{
          console.log("*******LOGGING UNIVERSITES***************");
          console.log(data);
          this.resultatsUniversites = data as Array<Universite>;
        }
      );

    }else if(this.searchService.formationQuery != ""){
      this.query = this.searchService.formationQuery
      this.formationService.searchEcoles(this.searchService.formationQuery).subscribe(
        (data:any)=>{
          console.log(data);
          this.resultatsEcoles = data;
        }
      )
      this.formationService.searchUniversites(this.searchService.searchQuery).subscribe(
        (data:any)=>{
          console.log(data);
          this.resultatsUniversites = data;
        }
      )
    }else if(this.searchService.metierQuery != ""){
      this.query = this.searchService.metierQuery
      this.formationService.searchMetiers(this.searchService.metierQuery).subscribe(
        (data:any)=>{
          console.log(data);
          this.resultatsMetiers = data.results as Array<Metier>;
          if(data.results){
            this.next_link_metiers=data.next;
            this.count_metiers=data.count;
          }
        }
      )
    }
  }

  navigateToDetailsMetier(id:string){
    this.router.navigate(['/metiers',id]);
  }
  navigateToDetailsUniversite(id:number){
    this.router.navigate(['/universites', id]); 
  }
  navigateToDetailsEcole(id:number){
    this.router.navigate(['/facultes/',id]);

  }
}
