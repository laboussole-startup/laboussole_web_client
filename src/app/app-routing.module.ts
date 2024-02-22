import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { PageAcceuilAdminComponent } from './page-acceuil-admin/page-acceuil-admin.component';
import { PageAcceuilSansCompteComponent } from './page-acceuil-sans-compte/page-acceuil-sans-compte.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageConnexionClientComponent } from './page-connexion-client/page-connexion-client.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { OffreDeFormationsComponent } from './Pages/offre-de-formations/offre-de-formations.component';

const routes: Routes = [
  {path:'',component:PageAcceuilSansCompteComponent},
  {path:'login',component:PageConnexionClientComponent},
  {path:'signup',component:PageInscriptionComponent},
  {path:'motDePasseOublie',component:MotDePasseOublieComponent},
  {path:'admin',component:PageAcceuilAdminComponent},
  {path: 'formation', component:OffreDeFormationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
