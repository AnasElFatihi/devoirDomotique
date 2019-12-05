import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddObjectDomotiqueComponent } from './add-object-domotique/add-object-domotique.component';
import { DetailComponent } from './detail/detail.component';
import { ObjetDomotiqueComponent } from './objet-domotique/objet-domotique.component';

const routes: Routes = [
  { path : '' , component: ConnexionComponent },
  
  { path:'list/:id',component:DetailComponent},
  { path : 'notFound' , component:NotfoundComponent},
  { path:'list',component:ObjetDomotiqueComponent},
  { path:'add',component:AddObjectDomotiqueComponent},
  { path:'**',redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
