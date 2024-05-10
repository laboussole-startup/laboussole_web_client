import { Injectable } from '@angular/core';
import { CentreInteret } from '../Models/centreInteret';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreInteretsService {

  public champ_lexical:Map<string,string> = new Map();


  private root_url:string='https://laboussole-back-end.onrender.com/centres_interet/';
  constructor(private httpClient: HttpClient) {

    this.champ_lexical.set("Technologie","informat polytech genie numerique technolo");
    this.champ_lexical.set("Agriculture","agricul elevage peche bois agri agro ");
    this.champ_lexical.set("Santé","medic medec infirmi sante chirurg pharma");
    this.champ_lexical.set("Droit","droit loi juri avocat magistra grefi");
    this.champ_lexical.set("Management","management econo business affaires finance");
    this.champ_lexical.set("Construction et Btp","civil genie construction btp batiment travaux technicien")
    this.champ_lexical.set("Mines","mines petrole hydrocarbure");
    this.champ_lexical.set("Énergie renouvelable","energie renouvelable");
    this.champ_lexical.set("Hydrocarbures","Hydrocarbure mines petrole");
    this.champ_lexical.set("Éducation","enseignement enseignant education instituteur institutrice");
    this.champ_lexical.set("Entrepreneuriat","Entrepreneuriat business management econo affaires finance");
    this.champ_lexical.set("Création et Design","Creation et Design arts");
    this.champ_lexical.set("Environnement","Environnement ecologie sante ");
    this.champ_lexical.set("Ingénierie", "ingenierie ingeni genie polytech technolo");
    this.champ_lexical.set("Sciences Humaines et sociales","Sciences Humaines et sociales socio anthropo culture");
    this.champ_lexical.set("Langues","litterature arts langues traduc interpret culture");
    this.champ_lexical.set("Tourisme et Hôtellerie","Tourisme et Hôtellerie ");
    this.champ_lexical.set("Commerce et vente","Commerce et vente");
    this.champ_lexical.set("Artisanat et métiers d'arts","Artisanat arts")
    this.champ_lexical.set("Forêts bois","foret bois agri agro");
    this.champ_lexical.set("Textile","stylis modelis coutur mode fashion arts")

   }

   getCentresInterets(): Observable<any> {
    return this.httpClient.get(this.root_url);
  }
}
