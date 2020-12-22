import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { TaskComponent } from './task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path : '' , component: TaskComponent },
  { path : 'notFound' , component:NotfoundComponent},
  { path:'add',component:AddTicketComponent},
  { path:'**',redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
