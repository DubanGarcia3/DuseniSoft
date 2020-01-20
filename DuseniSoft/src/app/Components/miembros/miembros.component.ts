import { Component, OnInit, NgModule } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router, NavigationExtras } from '@angular/router';
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
  miembroSeleccionado: Member = new Member();;
  
  ngOnInit() {
    // this.service.getMiembros().subscribe(data => { this.miembros = data; });
    this.recargarTabla();
  }

  recargarTabla(){
    this.service.getMiembros().subscribe(data => { this.miembros = data; });
  }

  auxCedula:number =0;
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
    console.log('el que se envia al editar', this.miembroAux)
  }

  getMiembroAux(): Member{
    return this.miembroAux; 
  }

  verInfoMiembro(miembro: Member){
    this.miembroSeleccionado = miembro;
    console.log("ESTE ES EL MIEMBRO:" + miembro.first_name);

    const navigationExtras: NavigationExtras = {state: {example:miembro}};
  
    this.router.navigate(['./ver-miembro/app-ver-miembro'], navigationExtras);
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