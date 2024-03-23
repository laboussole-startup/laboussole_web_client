
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private root_url: string = 'http://laboussole-edu.com:8000/auth/signup/';

  private login_url: string = 'http://laboussole-edu.com:8000/auth/jwt/create/';

  public user_email:string = "";



  constructor(private httpClient: HttpClient) { }

  createCompte(
    nom: string,
    prenom: string,
    email: string,
    password: string,
    genre: string="NON DEFINI",
    dernierDiplome: string='AUCUN',
    serie: string='AUCUN',
    telephone: string='+237',
    niveau: string='AUCUN',
    photo?: File,
    dateOfBirth: string = '2000-01-01' // Default value for date of birth
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      formData.append('username', nom);
      formData.append('first_name', nom);
      formData.append('last_name', prenom);
      formData.append('date_de_naissance', dateOfBirth); // Ensure date format is 'YYYY-MM-DD'
      formData.append('genre', genre);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('dernier_diplome', dernierDiplome);
      formData.append('serie', serie);
      formData.append('telephone', telephone);
      formData.append('niveau', niveau);
      formData.append('centre_interets',"allez en brousse avec ca");
      formData.append('is_staff', "false");
      formData.append('is_superuser', "false");
      formData.append('is_active', "true");
  
      // Check if photo is provided
      if (photo) {
        formData.append('photo_de_profil', photo);
        resolve(this.httpClient.post(this.root_url, formData).toPromise());
      } else {
        // Load image from assets folder
        const imagePath = '/assets/photo_icon.jpg'; // Change this to the actual path of your image
        fetch(imagePath)
          .then(response => response.blob())
          .then(blob => {
            const imageFile = new File([blob], 'photo_icon.jpg', { type: 'image/jpeg' });
            formData.append('photo_de_profil', imageFile);
  
            // Once file is appended to formData, you can make the POST request
            resolve(this.httpClient.post(this.root_url, formData).toPromise());
          })
          .catch(error => {
            reject('Error loading image: ' + error);
          });
      }
    });
  }

  login(email:any,password:any){
    return this.httpClient.post(this.login_url,{
      "email":email,
      "password":password
    });
  }

  updateUserEmail(email:string){
    this.user_email=email
  }

  updateCentreInterets(ci:Array<Number>){
    let update_url:string = 'http://laboussole-edu.com:8000/auth/'+this.user_email+'/';
    let centres = ci.join("|");
    return this.httpClient.put(update_url,{
      "centre_interets":centres
    });
  }
}