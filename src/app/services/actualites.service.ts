import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualitesService {

  // Set up the headers with the bearer token
headers = new HttpHeaders({
  'Authorization': 'Bearer ' + localStorage.getItem("access_token")
});

  private root_url:string='https://laboussole-back-end.onrender.com/actualites/';

  public currentArticleId:number=0;
  constructor(private httpClient: HttpClient) {
   }

   getAllArticles(){
    return this.httpClient.get(this.root_url);
   }
   getActualitBySenderId(senderId: any){
    return this.httpClient.get(`${this.root_url}?sender_id=${senderId}`);
  }
   getArticleById(id:number){
    return this.httpClient.get(this.root_url+id+'/');
   }
   setCurrentArticle(id:number){
    this.currentArticleId=id;
   }
   postArticle(titre:string,date:string,nom:string,contenu:string,domaine:string,i_pc:string,i_tel:string,i_tab:string){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    });
    let id:any = localStorage.getItem('user_id');
    let url:string = 'https://laboussole-back-end.onrender.com/actualites/';
    return this.httpClient.post(url,{
      "titre":titre,
      "date":date,
      "nom":nom,
      "contenu":contenu,
      "domaine":domaine,
      "image_pc":i_pc,
      "image_tablette":i_tab,
      "image_telephone":i_tel,
      "sender_id":id
    },{ headers:headers });

   }
}
