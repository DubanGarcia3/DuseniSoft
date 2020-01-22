import { Component, OnInit, NgModule } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/Modelo/Member';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { from } from 'rxjs';
@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {

constructor(private service: MiembrosService, private router: Router) { 
    this.recargarTabla();
  }
  dtOption: any = {};
  miembros: Member[];
  buscarMiembroFiltro;
  miembroAux:Member = new Member();
  auxCedula:number = 10454284;
  
  ngOnInit() {
    // this.service.getMiembros().subscribe(data => { this.miembros = data; });
    this.recargarTabla();
  }

  recargarTabla(){
    this.service.getMiembros().subscribe(data => { this.miembros = data; });
  }

  enviarCedula(cedula: number){
    this.auxCedula = cedula;
    console.log(this.auxCedula);
  }

  sendMiembro(cedula:number){
    this.enviarCedula(cedula);      
    this.service.getMiembroId(cedula).subscribe(data=>{
      localStorage.setItem("miembro", JSON.stringify(data));
    })
    this.miembroAux = JSON.parse(localStorage.getItem("miembro"));
    console.log('el que se envia desde miembro-comp:', this.miembroAux)
  }

  getMiembroAux(): Member{
    return this.miembroAux; 
  }

  info = [];
  sendInfo(){
    this.info = [this.miembroAux.cedula_member, this.miembroAux.first_name, this.miembroAux.second_name,
      this.miembroAux.first_last_name, this.miembroAux.second_last_name, this.miembroAux.email_member, 
      this.miembroAux.password_member, this.miembroAux.image_profile_member,
      this.miembroAux.gender, this.miembroAux.is_active_user, this.miembroAux.phone_number,
      this.miembroAux.dateOfBirth, this.miembroAux.address, this.miembroAux.association ];
  }

  verInfoMiembro(miembro: Member){

    console.log("ESTE ES EL MIEMBRO:" + miembro.first_name);
  }

/*
  eliminarMiembro(cedula: number){
    if(confirm("¿Está seguro que desear eliminar el miembro?")) {
      this.service.deleteMiembro(cedula).subscribe(
        (data)=> {
          console.log("Lo que retorna el server tras borrar el miembro",  data)
          this.recargarTabla();
        },
        error => console.log(error));
    }
  }
  */
}