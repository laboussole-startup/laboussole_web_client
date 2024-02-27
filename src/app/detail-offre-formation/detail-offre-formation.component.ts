import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-offre-formation',
  templateUrl: './detail-offre-formation.component.html',
  styleUrls: ['./detail-offre-formation.component.scss']
})
export class DetailOffreFormationComponent {
  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }
}
