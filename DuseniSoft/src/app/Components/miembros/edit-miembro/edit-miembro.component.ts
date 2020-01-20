import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Modelo/Member';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router } from '@angular/router';
import { MiembrosComponent } from '../miembros.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CiudadService } from 'src/app/Servicios/ciudad.service';
import { City } from 'src/app/Modelo/City';
import { Address } from 'src/app/Modelo/Address';

@Component({
  selector: 'app-edit-miembro',
  templateUrl: './edit-miembro.component.html',
  styleUrls: ['./edit-miembro.component.css']
})
export class EditMiembroComponent implements OnInit {

  auxMiembro:Member = new Member();
  submitted = false;  
  datos_miembro_formulario_edit: FormGroup;
  ciudadesForSelect: City[];
  genderFromSelect: number;
  direccionNueva:Address = new Address();
  ciudadExistente: City = new City()

  constructor(private service: MiembrosService, private router: Router,private formBuilder: FormBuilder, 
    private miembrocomp: MiembrosComponent, private CiudadService: CiudadService) {  }

  ngOnInit() {

    this.CiudadService.getCiudades().subscribe(data => { this.ciudadesForSelect = data; });
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
    
  }

  get formulario(){
    return this.datos_miembro_formulario_edit.controls; 
  }

  loadMember(){
    //this.auxMiembro = JSON.parse(localStorage.getItem("miembro"));
     this.auxMiembro = this.miembrocomp.getMiembroAux();
     this.direccionNueva.city = this.ciudadExistente;
     this.auxMiembro.address = this.direccionNueva;
    console.log('loadMember, abre el modal', this.auxMiembro);
  }
  
  actualizarMiembro(member:Member){
    this.submitted = true;
    this.service.updateMiembro(member)
    .subscribe(data=>{
      this.auxMiembro = data;
      alert("Se actualizo el miembro");
      this.router.navigate(["app-miembros"]);
  });
  }

vaciarCampos(){
  this.datos_miembro_formulario_edit.patchValue({
   cedula: '',
   primer_nombre: '',
   segundo_nombre:'',
   primer_apellido: '',
   segundo_apellido: '',
   email:'',
   contrasena: '',
   fecha_nacimiento:'',
   direccion: '',
   genero: '',
   telefono: '',
   ciudad: ''
  });
}

}