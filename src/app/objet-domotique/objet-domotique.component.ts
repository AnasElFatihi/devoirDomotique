import { Component, OnInit } from '@angular/core';
import { ServiceObjetService } from '../services/service-objet.service';


declare var swal: any;

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
     if( obj.statutDObjet == true)
      swal("L'objet est deja connecté!", "", "error");
      else
      this.serviceObj.allum(obj);
   }

   etteindre(obj: any)
   {
    if( obj.statutDObjet == false)
    swal("L'objet est deja deconnecté!", "", "error");
    else
    this.serviceObj.ettend(obj);
   }

   connecter(obj: any)
   {
    if( obj.estConnecte == true)
    swal("L'objet est deja connecté!", "", "error");
    else
    this.serviceObj.connect(obj);
   }

   deconnecter(obj: any)
   {if( obj.estConnecte == false)
    swal("L'objet est deja connecté!", "", "error");
    else
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
