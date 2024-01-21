import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageAcceuilSansCompteComponent } from './page-acceuil-sans-compte/page-acceuil-sans-compte.component';
import { PageConnexionClientComponent } from './page-connexion-client/page-connexion-client.component';
import { PageCreationCompteClientComponent } from './page-creation-compte-client/page-creation-compte-client.component';
import { NavMobileHeaderComponent } from './nav-mobile-header/nav-mobile-header.component';
import { NavMobilePageComponent } from './nav-mobile-page/nav-mobile-page.component';
import { CustomRoundButtonComponent } from './custom-round-button/custom-round-button.component';
import { AcceuilOptionBoxComponent } from './acceuil-option-box/acceuil-option-box.component';
import { TemoignageBoxComponent } from './temoignage-box/temoignage-box.component';
import { ActualiteBoxComponent } from './actualite-box/actualite-box.component';
import { FooterComponent } from './footer/footer.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component'

@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilSansCompteComponent,
    PageConnexionClientComponent,
    PageCreationCompteClientComponent,
    NavMobileHeaderComponent,
    NavMobilePageComponent,
    CustomRoundButtonComponent,
    AcceuilOptionBoxComponent,
    TemoignageBoxComponent,
    ActualiteBoxComponent,
    FooterComponent,
    PageInscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
