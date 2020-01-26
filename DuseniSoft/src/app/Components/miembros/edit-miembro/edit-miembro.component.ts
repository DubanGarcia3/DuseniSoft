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
  generosForSelect: String[]=["Masculino","Femenino"];
  genderFromSelect: number;
  direccionNueva:Address = new Address();
  generoSeleccionado: String;
  fecha_nacimiento: String;

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
      email: ['', Validators.required],
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
     this.fecha_nacimiento = this.auxMiembro.dateOfBirth.toString();
     this.generoSeleccionado = this.auxMiembro.gender=="M" ? "Masculino" : "Femenino";
     console.log("GENERO SELECCIONADO: " + this.generoSeleccionado);
    //  this.direccionNueva.city = this.ciudadExistente;
    //  this.auxMiembro.address = this.direccionNueva;
    console.log('loadMember, abre el modal', this.auxMiembro);
    console.log('PRUEBAA' + this.auxMiembro.address.city.name_city);
  }

  actualizarMiembro(){
    this.submitted = true;

    var fecha_partida = this.fecha_nacimiento.split("/", 3);
    var fecha_nueva = new Date();  
    // console.log("FECHA EN POSICION [1] --> " + (Number)(fecha_partida[1]));
    fecha_nueva.setDate((Number)(fecha_partida[0])-1);
    fecha_nueva.setMonth((Number)(fecha_partida[1])-1);
    fecha_nueva.setFullYear((Number)(fecha_partida[2]));
    this.auxMiembro.dateOfBirth = fecha_nueva;
    // this.miembroPrueba.gender = "M";
    this.auxMiembro.is_active_user = true;
    this.auxMiembro.image_profile_member = "image_url_prueba";
    this.auxMiembro.gender = this.generoSeleccionado == "Masculino" ? "M" : "F";
    // console.log("MIEMBRO ACTUALIZADO: " + this.auxMiembro.dateOfBirth);
    this.service.updateMiembro(this.auxMiembro)
    .subscribe(data=>{
      this.auxMiembro = data;
      alert("Se actualizo el miembro");
      // this.router.navigate(["app-miembros"]);
      this.miembrocomp.recargarTabla();
  });
  // this.vaciarCampos();
  // this.datos_miembro_formulario_edit.reset();
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

  compararCiudades(ciudad1: City, ciudad2: City){
    if (ciudad1==null || ciudad2==null) {
      return false;
    }
    return ciudad1.name_city===ciudad2.name_city;
  }

  compararGeneros(genero1: String, genero2: String){
    console.log("Genero1: " + genero1 + " || Genero2: " + genero2);
    if (genero1==null || genero2==null) {
      return false;
    }
    return genero1===genero2;
  }
}
