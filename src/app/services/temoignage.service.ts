import { Injectable } from '@angular/core';
import { Temoignage } from '../Models/temoignage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemoignageService {

  private root_url:string='http://laboussole-edu.com:8000/temoignages/';
  private view_Url:string='';


  constructor(private httpClient: HttpClient) { }

  getTemoignages(): Observable<any> {
    return this.httpClient.get(this.root_url);
  }
  def_temoignage_1:Temoignage = {
    'nom':'TCHOUPE MEGANE',
    'commentaire':'Lorsque j’ai eu mon baccalauréat A4Esp l’année dernière au lycée Classique et Moderne de Sangmélima je ne savais même pas qu’on pouvait faire une école pour être comptable avec un BAC A c’est ainsi que j’ai découvert grâce a LABOUSSOLE que c’était possible et j’ai fais le concours de l’IUT de Douala pour la filière GAPMO et j’ai réussi/',
    'vote':3.5
  }

  def_temoignage_2:Temoignage = {
    'nom':'ATANGANA Prince',
    'commentaire':'J’ai eu mon probatoire D l’année dernière et à chaque fois pendant les vacances mon père me demandais déjà de lui dire ce que j’allais faire après le BAC et c’est la que j’ai découvert LABOUSSOLE et aujourd’hui je sais que je veux être Ingénieur agronome et me former à la FASA de Dschang',
    'vote':4
  }
  def_temoignage_3:Temoignage = {
    'nom':'TIZI Joel',
    'commentaire':'Grâce à LABOUSSOLE j’ai découvert qu’il y’a déjà l’ESSEC ici à Garoua et je compte bien faire le concours cette année et le réussir.',
    'vote':3.5
  }

  list_temoignages:Temoignage[] = [
    this.def_temoignage_1,this.def_temoignage_2,this.def_temoignage_3
  ]

  
}
