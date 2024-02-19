import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreFormationService {

  constructor(private http: HttpClient) { }
  url='https://dummyjson.com'

  getFormations() {
    return this.http.get(this.url+'/products');
  }
}
