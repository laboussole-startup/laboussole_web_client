import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentreInteretsComponent } from './centre-interets/centre-interets.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { PageAcceuilAdminComponent } from './page-acceuil-admin/page-acceuil-admin.component';
import { PageAcceuilSansCompteComponent } from './page-acceuil-sans-compte/page-acceuil-sans-compte.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageConnexionClientComponent } from './page-connexion-client/page-connexion-client.component';
import { PageCreationCompteClientComponent } from './page-creation-compte-client/page-creation-compte-client.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { OffreDeFormationsComponent } from './Pages/offre-de-formations/offre-de-formations.component';
import { OffreEtudesComponent } from './Pages/offre-etudes/offre-etudes.component';
import { DetailOffreFormationComponent } from './detail-offre-formation/detail-offre-formation.component';
import { DetailBourseEtudeComponent } from './detail-bourse-etude/detail-bourse-etude.component';
import { FormationsComponent } from './Pages/formations/formations.component';
import { DetailsFilieresComponent } from './Pages/details-filieres/details-filieres.component';
import { SignupErrorComponent } from './signup-error/signup-error.component';
import { SignupResponseComponent } from './signup-response/signup-response.component';
const routes: Routes = [
  { path: '', component: PageAcceuilSansCompteComponent },
  { path: 'login', component: PageConnexionClientComponent },
  { path: 'signup', component: PageCreationCompteClientComponent },
  { path: 'motDePasseOublie', component: MotDePasseOublieComponent },
  { path: 'admin', component: PageAcceuilAdminComponent },
  { path: 'metiers', component: OffreDeFormationsComponent },
  { path: 'metiers/:id_metiers', component: DetailOffreFormationComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'etudes', component: OffreEtudesComponent },
  { path: 'detail-bourses-etudes', component: DetailBourseEtudeComponent },
  { path: 'formations/:faculte_id', component: DetailsFilieresComponent },
  { path: 'signup-success', component: SignupResponseComponent },
  { path: 'signup-error', component: SignupErrorComponent },
  { path: 'centres-interets', component: CentreInteretsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
