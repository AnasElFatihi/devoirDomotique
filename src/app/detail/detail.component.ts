import { Component, OnInit } from '@angular/core';
import { ServiceObjetService } from '../services/service-objet.service';
import { ActivatedRoute } from '@angular/router';
declare  var swal:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public monobjet;
  constructor(private monservice:ServiceObjetService,private active:ActivatedRoute) { }

  ngOnInit() {
    this.monobjet = this.monservice.getobjet(this.active.snapshot.params['id']);

  }

  allumer(obj: any)
   {
     if( obj.statutDObjet == true)
      swal("L'objet est deja connecté!", "", "error");
      else
      this.monservice.allum(obj);
   }

   etteindre(obj: any)
   {
    if( obj.statutDObjet == false)
    swal("L'objet est deja deconnecté!", "", "error");
    else
    this.monservice.ettend(obj);
    //this.monobjet=
   }

   connecte(obj: any)
   {
    for(let objet of this.monservice.objets)
    {
        if(objet.id === obj.id )
        objet.estConnecte=true;
    }
   }

   deconnect(obj: any)
   {
    for(let objet of this.monservice.objets)
    {
        if(objet.id === obj.id )
        objet.estConnecte=false;
    }
   }


}
