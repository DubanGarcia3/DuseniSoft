import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/Modelo/Member';
import { MiembrosComponent } from '../miembros.component';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-ver-miembro',
  templateUrl: './ver-miembro.component.html',
  styleUrls: ['./ver-miembro.component.css']
})
export class VerMiembroComponent implements OnInit {

  @Input() cedula : number;
  miembro:Member = new Member();

  constructor(private router: Router, private miembrosComponent:MiembrosComponent, private service:MiembrosService ) {
    }
    
    ngOnInit() {
      this.loadMember();
      console.log('en el modal',this.cedula);
    }
    
    loadMember(){
      /*
      this.cedula = JSON.parse(localStorage.getItem("miembro"));
      console.log('miembro en vercomp',this.cedula);
      this.miembrosComponent.sendInfo();
      console.log(this.miembrosComponent.auxCedula);
      */
     this.service.getMiembroId(this.cedula).subscribe(data=>{
      this.miembro = data;
    })
  }
  

}
