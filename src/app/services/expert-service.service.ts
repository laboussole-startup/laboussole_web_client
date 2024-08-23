import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpertServiceService {
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem("access_token")
  });

  private root_url: string = 'https://laboussole-back-end.onrender.com/expert/';

  constructor(private httpClient: HttpClient) { }

  getExpertInfo(id:number){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    });
    let url:string = this.root_url+id+'/';
    return this.httpClient.get(url,{ headers: headers });
  }
}
