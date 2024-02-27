import { Component } from '@angular/core';

@Component({
  selector: 'app-page-acceuil-sans-compte',
  templateUrl: './page-acceuil-sans-compte.component.html',
  styleUrls: ['./page-acceuil-sans-compte.component.scss']
})

export class PageAcceuilSansCompteComponent {
  isMenuIconClicked = false;
  isMenuIconClosed = true;
  showSearchBar = false;

  description_Metier:string = "Découvre l'univers des métiers  avec  LABOUSSOLE ! Explorez une multitude de professions passionnantes et trouvez le métier qui correspond à ton profil."
  description_Bourses:string = "LABOUSSOLE te donne accès à un large éventail de bourses d'études pour t’aider à financer tes études et réaliser tes rêves"
  description_Voyages_Etudes:string = "Tu as envie de poursuivre tes études à l’extérieur ?  Nous mettons à ta disposition les informations dont tu auras besoins pour réussir à l’étranger."
  description_Formation:string = "LABOUSSOLE te donne les informations sur toutes les offres de formations au Cameroun et au Congo afin que tu puisses choisir aisément ta Filière d’étude."
  


  toggleMenu() {
    this.isMenuIconClicked = !this.isMenuIconClicked;
    this.isMenuIconClosed = !this.isMenuIconClosed;
  }
}
