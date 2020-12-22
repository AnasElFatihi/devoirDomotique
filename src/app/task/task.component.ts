import { Component, OnInit } from '@angular/core';
import { ServiceObjetService } from '../services/service-objet.service';
declare var swal: any;
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  objets: any[];

  id: number;
  nomDObjet: string= "nom1";
  emplacementDOobjet: string="emplcae1";
  statutDObjet: boolean=false;
  estConnecte: boolean= true;

  
  constructor(private serviceObj: ServiceObjetService) { }

  ngOnInit() {
    this.objets=this.serviceObj.afficher();
    if(this.serviceObj.welcome == true)
    swal("bienvenue veuillez saisir vos taches!", "", "info");
  }

  afficher()
   {
       return this.objets;
   }

   
  

   


  


   

}
