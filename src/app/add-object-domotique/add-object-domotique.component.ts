import { Component, OnInit } from '@angular/core';
import { ServiceObjetService } from '../services/service-objet.service';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-object-domotique',
  templateUrl: './add-object-domotique.component.html',
  styleUrls: ['./add-object-domotique.component.css']
})
export class AddObjectDomotiqueComponent implements OnInit {

  objet: any;
  visible=false;
  constructor(private serviceObj: ServiceObjetService,private router:Router) { }

  
  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    console.log("test");
    console.log(form.value);
    const nomDObjet= form.value['nomDObjet'];
    const emplacementDOobjet= form.value['emplacementDOobjet'];
    const statutDObjet= form.value['statutDObjet'];
    const estConnecte= form.value['estConnecte'];
    this.serviceObj.ajouterO(nomDObjet, emplacementDOobjet, statutDObjet, estConnecte);
    this.router.navigate(['list']);
  }

 
}
