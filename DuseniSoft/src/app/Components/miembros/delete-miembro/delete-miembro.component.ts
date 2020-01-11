import { Component, OnInit, NgModule } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router } from '@angular/router';
import {  MiembrosComponent} from 'src/app/Components/miembros/miembros.component';

@Component({
  selector: 'app-delete-miembro',
  templateUrl: './delete-miembro.component.html',
  styleUrls: ['./delete-miembro.component.css']
})
export class DeleteMiembroComponent implements OnInit {

  constructor(private service: MiembrosService, private router: Router, private miembro: MiembrosComponent) { }

  ngOnInit() {
  }

  eliminarMiembro(cedula: number) {
    this.service.deleteMiembro(cedula).subscribe(
      (data) => {
        console.log("Lo que retorna el server tras borrar el miembro", data)
        this.miembro.recargarTabla();
      },
      error => console.log(error));

  }

}
