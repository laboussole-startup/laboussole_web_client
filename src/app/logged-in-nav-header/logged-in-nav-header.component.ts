import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-nav-header',
  templateUrl: './logged-in-nav-header.component.html',
  styleUrls: ['./logged-in-nav-header.component.scss']
})
export class LoggedInNavHeaderComponent {

  @Output() menuIconClosed = new EventEmitter<void>();

  showSearchBar = false;

  hideMenuIcon = false;

  showDropdown = false;

  username:string="";

  constructor(private userService:UserServiceService,private router:Router,private location:Location){

  }

  signOut(){
    console.log("signing out");
    this.userService.user_email='';
    this.router.navigate(['/login']);
  }

  ngOnInit(): void{
    this.username = this.userService.username;
  }

  // Call this method when you want to open the menu
  openMenu() {
    this.menuIconClosed.emit();
  }

}
