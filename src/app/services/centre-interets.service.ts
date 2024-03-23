import { Injectable } from '@angular/core';
import { CentreInteret } from '../Models/centreInteret';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentreInteretsService {

  private root_url:string='http://laboussole-edu.com:8000/centres_interet/';
  constructor(private httpClient: HttpClient) {

   }

   getCentresInterets(): Observable<any> {
    return this.httpClient.get(this.root_url);
  }
}
