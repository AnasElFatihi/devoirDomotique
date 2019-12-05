import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ObjetDomotiqueComponent } from './objet-domotique/objet-domotique.component';
import { AddObjectDomotiqueComponent } from './add-object-domotique/add-object-domotique.component';
import { MenuComponent } from './menu/menu.component';
import { BoiteControlComponent } from './boite-control/boite-control.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjetDomotiqueComponent,
    AddObjectDomotiqueComponent,
    MenuComponent,
    BoiteControlComponent,
    ConnexionComponent,
    NotfoundComponent,
    DetailComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
