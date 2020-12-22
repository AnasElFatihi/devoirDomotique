import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceObjetService } from '../services/service-objet.service';
@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  objet: any;
 
  visible=false;
  constructor(private serviceObj: ServiceObjetService,private router:Router) { }

  
  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    console.log(form.value);
    const nomTicket= form.value['nomTicket'];
    const dateDebut= form.value['dateDebut'];
    const dateFin= form.value['dateFin'];
    const etat=form.value['etat'];
    this.serviceObj.ajouterO(nomTicket, dateDebut, dateFin,etat);
    this.router.navigate(['']);
  }

}
