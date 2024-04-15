import { Injectable } from '@angular/core';
import { CentreInteret } from '../Models/centreInteret';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreInteretsService {

  private root_url:string='https://laboussole-back-end.onrender.com/centres_interet/';
  constructor(private httpClient: HttpClient) {

   }

   getCentresInterets(): Observable<any> {
    return this.httpClient.get(this.root_url);
  }
}
