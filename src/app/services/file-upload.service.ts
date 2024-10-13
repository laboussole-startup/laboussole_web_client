import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private root_url:string='https://laboussole-back-end.onrender.com/files/upload/';

  constructor(private httpClient: HttpClient) {
  }
  postFILE(file: File) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
      // 'Content-Type': 'multipart/form-data' // Do not set this manually
    });
    
    const formData = new FormData(); // Create a FormData object
    formData.append('file', file); // Append the file to the FormData
  
    const url: string = 'https://laboussole-back-end.onrender.com/files/upload/';
    
    return this.httpClient.post(url, formData, { headers: headers });
  }
  
}
