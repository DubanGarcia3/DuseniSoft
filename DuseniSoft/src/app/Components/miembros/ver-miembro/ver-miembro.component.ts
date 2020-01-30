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
  fecha_nacimiento: String;

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
      this.fecha_nacimiento = this.miembro.dateOfBirth.toString();
      var fecha_partida = this.miembro.dateOfBirth.toString().split("-", 3);
      this.fecha_nacimiento = fecha_partida[2]+'/'+fecha_partida[1]+'/'+fecha_partida[0];
    })
    console.log(this.miembro);
  }
  

}
