import { Component, OnInit } from '@angular/core';
import { ServiceObjetService } from '../services/service-objet.service';

@Component({
  selector: 'app-objet-domotique',
  templateUrl: './objet-domotique.component.html',
  styleUrls: ['./objet-domotique.component.css']
})
export class ObjetDomotiqueComponent implements OnInit {

  objets: any[];

  id: number;
  nomDObjet: string= "nom1";
  emplacementDOobjet: string="emplcae1";
  statutDObjet: boolean=false;
  estConnecte: boolean= true;

  
  constructor(private serviceObj: ServiceObjetService) { }

  ngOnInit() {
    this.objets=this.serviceObj.afficher();
  }

  afficher()
   {
      
       return this.objets;
   }

   allumer(obj: any)
   {
    this.serviceObj.allum(obj);
   }

   etteindre(obj: any)
   {
    this.serviceObj.ettend(obj);
   }

   connecter(obj: any)
   {
    this.serviceObj.connect(obj);
   }

   deconnecter(obj: any)
   {
    this.serviceObj.deconnect(obj);
   }


   allumerTout()
   {
    this.serviceObj.allumerT();
   }

   ettendreTout()
   {
    this.serviceObj.ettendreT();
   }


   connecterTout()
   {
    this.serviceObj.connecterT();
   }

   deconnecterTout()
   {
    this.serviceObj.deconnecterT();
   }

}
