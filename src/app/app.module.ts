import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ObjetDomotiqueComponent } from './objet-domotique/objet-domotique.component';
import { AddObjectDomotiqueComponent } from './add-object-domotique/add-object-domotique.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjetDomotiqueComponent,
    AddObjectDomotiqueComponent
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
