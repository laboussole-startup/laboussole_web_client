import { Component ,OnInit} from '@angular/core';
import { UserInfo } from '../Models/userInfo';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  current_location:string = "";
  location_number:number = 0;
  username:string="";
  profile_image:string="";
  selectedFile!: File;

  constructor(private userService:UserServiceService){

  }

  changeLocation(n:number){
    this.location_number=n;
    if(n==1){
      this.current_location="edit profile";
    }else if(n==3){
      this.current_location="changer mot de pass"
    }else if(n==2){
      this.current_location="notifications"
    }
  }
  ngOnInit(){
    this.verifyLogin();
  }
  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profile_image = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
    this.userService.chosenImage=this.selectedFile;
    this.userService.updateProfilePhoto(this.selectedFile).then((response) => {
      console.log(response);
      
    })
    .catch((error) => {
      console.log("error")
      console.log(error);
         
    });
  }

  verifyLogin(){
    this.userService.getUserInfo().subscribe(
      (data) => {
        console.log(data);
        let v:UserInfo = data as UserInfo;
        this.username = v.username?v.username:this.username;
        this.profile_image=v.photo_de_profil?v.photo_de_profil:this.profile_image;

        
      },
      (error) => {
        console.error("An error occurred:", error);      
      }
    );
  }
}
