import { Component } from '@angular/core';
import { UserInfo } from '../Models/userInfo';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  isLoggedIn:boolean=false;

  constructor(private userService:UserServiceService){
  }

  ngOnInit(): void {
    this.verifyLogin();
  }

  verifyLogin(){
    this.userService.getUserInfo().subscribe(
      (data) => {
        console.log(data);
        let v:UserInfo = data as UserInfo;
        this.isLoggedIn=true;
        this.userService.username= v.username;
        
      },
      (error) => {
        this.isLoggedIn=false;
        console.error("An error occurred:", error);      
      }
    );
  }

  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }
}