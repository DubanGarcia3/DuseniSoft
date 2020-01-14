import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Modelo/Member';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router } from '@angular/router';
import { MiembrosComponent } from '../miembros.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-miembro',
  templateUrl: './edit-miembro.component.html',
  styleUrls: ['./edit-miembro.component.css']
})
export class EditMiembroComponent implements OnInit {

  auxMiembro:Member = new Member();
  //memb:FormGroup;
  submitted = false;  
  //datos_miembro_formulario_edit: FormGroup;

  constructor(private service: MiembrosService, private router: Router,private formBuilder: FormBuilder, 
    private miembrocomp: MiembrosComponent) {  }

  ngOnInit() {
/*
    this.datos_miembro_formulario_edit = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      cedula: ['', Validators.required],
      primer_nombre: ['', Validators.required],
      segundo_nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      genero: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
    */
   this.loadMember();
  }


  loadMember(){
    console.log('editarMiembro');
    this.auxMiembro = JSON.parse(localStorage.getItem("miembro"));
    JSON.parse(localStorage.getItem("miembro"));

  }
  /*
  actualizarProducto(member:Member){
    this.submitted = true;
    if (this.memb.invalid) {
       return;
   }
    this.service.updateMiembro(member)
    .subscribe(data=>{
      this.miembroAux = data;
      alert("Se actualizo el miembro");
      this.router.navigate(["app-miembros"]);
  });
  }
*/


}
