import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";


import { MenuComponent } from './menu/menu.component';
import { BoiteControlComponent } from './boite-control/boite-control.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { TaskComponent } from './task/task.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoiteControlComponent,
    NotfoundComponent,
 
    TaskComponent,
    AddTicketComponent
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
