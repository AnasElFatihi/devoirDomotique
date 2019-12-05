import { Injectable } from '@angular/core';
declare var swal: any;

@Injectable({
  providedIn: 'root'
})




export class ServiceObjetService {

    public temoin=false;
    objets=
     [
        {
             id: 1,
             nomDObjet: "TV",
             emplacementDOobjet: "Salon",
             statutDObjet: false,
             estConnecte: true
        },
        {
            id: 2,
            nomDObjet: "Frigo",
            emplacementDOobjet: "Cuisine",
            statutDObjet: true,
            estConnecte: false
       },
       {
        id: 3,
        nomDObjet: "Machine à café",
        emplacementDOobjet: "Cuisine",
        statutDObjet: true,
        estConnecte: false
       }

    ]

   afficher()
   {
      
       return this.objets;
   }

   allum(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.statutDObjet=true;
    }
   }

   ettend(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.statutDObjet=false;
    }
   }

   connect(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.estConnecte=true;
    }
   }

   deconnect(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.estConnecte=false;
    }
   }


   allumerT()
   {
    for(let objet of this.objets)
    {
        objet.statutDObjet=true;
    }
   }

   ettendreT()
   {
    for(let objet of this.objets)
    {
        objet.statutDObjet=false;
    }
   }


   connecterT()
   {
    for(let objet of this.objets)
    {
        objet.estConnecte=true;
    }
   }

   deconnecterT()
   {
    for(let objet of this.objets)
    {
        objet.estConnecte=false;
    }
   }

   ajouterO(nomDObjet: string, emplacementDOobjet: string, statutDObjet: boolean, estConnecte: boolean )
   {
    const objet =
    {
    id: 0,
    nomDObjet: '',
    emplacementDOobjet: '',
    statutDObjet: false,
    estConnecte: false
    }
    if(nomDObjet === "" || emplacementDOobjet ==="" )
        swal("Tous les champs sont obligatoires!", "", "error");
    else{

    objet.nomDObjet= nomDObjet,
    objet.emplacementDOobjet= emplacementDOobjet,
    objet.statutDObjet= statutDObjet,
    objet.estConnecte= estConnecte;
    objet.id=this.objets[(this.objets.length-1)].id+ 1;
    this.objets.push(objet);
            
}
    
   }

   getobjet(nom)
   {
       for(const e of this.objets)
       if(e.id=nom)
       return e;
   }

}

