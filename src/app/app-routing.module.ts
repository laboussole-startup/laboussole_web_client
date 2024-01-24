import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilSansCompteComponent } from './page-acceuil-sans-compte/page-acceuil-sans-compte.component';
import { PageConnexionClientComponent } from './page-connexion-client/page-connexion-client.component';
import { PageCreationCompteClientComponent } from './page-creation-compte-client/page-creation-compte-client.component';

const routes: Routes = [
  {path:'',component:PageAcceuilSansCompteComponent},
  {path:'login',component:PageConnexionClientComponent},
  {path:'signup',component:PageCreationCompteClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
