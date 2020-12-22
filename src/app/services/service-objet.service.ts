import { Injectable } from '@angular/core';
declare var swal: any;

@Injectable({
  providedIn: 'root'
})




export class ServiceObjetService {

    welcome = true;
    public temoin=false;
    objets=
     [
    

    ]

   afficher()
   {
      
       return this.objets;
   }

   

   

   

   ajouterO(nomTicket: string, dateDebut: string, dateFin: string,etat:string )
   {
    const objet =
    {
    id: 0,
    nomTicket: '',
    dateDebut: '',
    dateFin: '',
    etat:''
    }
    if(nomTicket === "" || dateDebut ==="" )
        swal("Tous les champs sont obligatoires!", "", "error");
    else{

    objet.nomTicket= nomTicket,
    objet.dateDebut= dateDebut,
    objet.dateFin= dateFin,
    objet.etat=etat;
    this.objets.push(objet);
    this.welcome=false;
            
}
    
   }



}

