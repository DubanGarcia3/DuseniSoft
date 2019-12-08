import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Member } from 'src/app/Modelo/Member';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CiudadService } from 'src/app/Servicios/ciudad.service';
import { City } from 'src/app/Modelo/City';
import { Address } from 'src/app/Modelo/Address';
import { Association } from 'src/app/Modelo/Association';
import { DireccionService } from 'src/app/Servicios/direccion.service';

@Component({
  selector: 'app-add-miembro',
  templateUrl: './add-miembro.component.html',
  styleUrls: ['./add-miembro.component.css']
})
export class AddMiembroComponent implements OnInit {

  datos_miembro_formulario: FormGroup;
  ciudades: City[];
  member: Member = new Member();
  miembroPrueba: Member = new Member();
  direccionNueva:Address = new Address();
  ciudadFromSelect: String;
  genderFromSelect: number;
  ciudadExistente: City = new City();
  asociacionExistente:Association = new Association();
  public days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  public months=['enero','febrero'];
  public years=[2018,2017];

  constructor(private miembrosService: MiembrosService, private CiudadService: CiudadService,private direccionService:DireccionService ,private formBuilder: FormBuilder) { }


  ngOnInit() {
    //carga las ciudades
    this.CiudadService.getCiudades().subscribe(data => { this.ciudades = data; });
    /*
        this.CiudadService.getCiudades()
        .subscribe(data=>{
          this.ciudades=data;
          this.ciudades.forEach(element => {
            $('#select-ciudades').append('<option value="'+element.id_city+'">'+element.name_city+'</option>');
          });
          console.log(this.ciudades);
        });
        */

    this.datos_miembro_formulario = this.formBuilder.group({
      id: ['', Validators.required],
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

  get f() { return this.datos_miembro_formulario.controls; }


  getCiudadFromSelect(){ 
    this.ciudades.forEach(ciudadActual => {
      if (ciudadActual.name_city == this.ciudadFromSelect) {
        this.ciudadExistente.id_city = ciudadActual.id_city;
        return;
      }
    });
  }

  getGenderFromSelect(){
    this.member.gender = this.genderFromSelect == 1 ? "M" : "F";
    // if (this.genderFromSelect == 1) {
    //   this.member.gender = "M";
    // }else{
    //   this.member.gender = "F";
    // }
  }

  addMember() {    
    // console.log("CIUDAD DEL FORM --> " + this.ciudadExistente.id_city );
    // console.log("GENERO DEL FORM --> " + this.member.gender);
    // // CREO EL MIEMBRO
    // this.miembroPrueba.cedula_member = 3;
    // this.miembroPrueba.first_name = "PrimerNombre";
    // this.miembroPrueba.second_name = "SegundoNombre"
    // this.miembroPrueba.second_last_name = "SegundoApellido";
    // this.miembroPrueba.first_last_name = "PrimerApellido";
    // this.miembroPrueba.email_member = "emailPrube";
    // this.miembroPrueba.password_member = "1234";
    // this.miembroPrueba.image_profile_member = "image_url_prueba";
    // this.miembroPrueba.gender = "M";
    // this.miembroPrueba.is_active_user = true;
    // this.miembroPrueba.dateOfBirth = new Date("2019-01-16");
    // this.miembroPrueba.phone_number = 12345689;

    // // CREO LA CIUDAD EXISTENTE 
    // this.ciudadExistente.id_city = 1;

    // // CREO LA DIRECCION NUEVA CON LA CIUDAD EXISTENTE
    this.direccionNueva.city = this.ciudadExistente;
    // this.direccionNueva.address_description = "direccion de prueba";

    // //CREO LA ASOCIACION EXISTENTE
    this.asociacionExistente.id_association = 1;

    this.member.address = this.direccionNueva;
    this.member.association = this.asociacionExistente;

    this.member.dateOfBirth = new Date("2019-01-10");
    // console.log("Esto retorna la dirección ---> " + this.member.dateOfBirth.getDay);
    this.direccionService.guardarDireccion(this.direccionNueva).subscribe(
      (data)=> {console.log("Lo que retorna el server tras agregar la dirección",  data)
          if(data != null){
            console.log("OK DIRECIÓN");
          }else{
            console.log("validar que los datos esten correctos");
          }
      }
    );
    this.miembrosService.guardarMiembro(this.member).subscribe(
      (data)=> {console.log("Lo que retorna el server tras agregar el miembro",  data)
          if(data != null){
            console.log("OK MIEMBRO");
          }else{
            console.log("validar que los datos esten correctos");
          }
      }
    );
  }

  getTamano() {
    let length = this.ciudades.length;
    for (var i = 0; i < length; i++) {
      console.log(this.ciudades[i]);
    }
  }

  llenarDias(){
    for (var i = 0; i < length; i++) {
      console.log(this.ciudades[i]);
    }
  }

}
