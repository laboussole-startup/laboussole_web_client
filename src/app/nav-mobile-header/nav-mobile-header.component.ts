import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-nav-mobile-header',
  templateUrl: './nav-mobile-header.component.html',
  styleUrls: ['./nav-mobile-header.component.scss']
})
export class NavMobileHeaderComponent {


  constructor(private searchService:SearchService,private router:Router,private userService:UserServiceService){

  }

  @Output() menuIconClosed = new EventEmitter<void>();
  
  query:string="";
  username:string = "default";
  
  showSearchBar = false;

  hideMenuIcon = false;

  showDropdown = false;

  // Call this method when you want to open the menu
  openMenu() {
    this.menuIconClosed.emit();
  }
  toggleSearchBar(){

  }
  signOut(){
    console.log("signing out");
    this.userService.user_email='';
    this.router.navigate(['/login']);
  }
  onEnterKeyPressed(){
    this.searchService.setSearchQuery(this.query)
    this.searchService.setFormationsQuery("");
    this.searchService.setMetiersQuery("");
    this.router.navigate(["/search-results"]);
  }
}
