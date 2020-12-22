import { Component, OnInit } from '@angular/core';
import { ServiceObjetService } from '../services/service-objet.service';
import { Router } from '@angular/router';

var swal :any;
@Component({
  selector: 'app-boite-control',
  templateUrl: './boite-control.component.html',
  styleUrls: ['./boite-control.component.css']
})
export class BoiteControlComponent implements OnInit {

  constructor(private serviceObj: ServiceObjetService,private router:Router) { }

  ngOnInit() {
  }

 

  
   hideMe(){
    this.router.navigate(['add']);
    
   }
}
