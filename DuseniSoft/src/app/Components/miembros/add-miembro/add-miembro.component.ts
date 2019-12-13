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
  ciudadesForSelect: City[];
  member: Member = new Member();
  miembroPrueba: Member = new Member();
  direccionNueva:Address = new Address();
  ciudadFromSelect: String;
  genderFromSelect: number;
  ciudadExistente: City = new City();
  asociacionExistente:Association = new Association();
  fecha_nacimiento: String;


  constructor(private miembrosService: MiembrosService,
    private CiudadService: CiudadService,
    private direccionService:DireccionService,
    private formBuilder: FormBuilder) { }



  ngOnInit() {
    //carga las ciudadesForSelect
    this.CiudadService.getCiudades().subscribe(data => { this.ciudadesForSelect = data; });
    /*
        this.CiudadService.getciudadesForSelect()
        .subscribe(data=>{
          this.ciudadesForSelect=data;
          this.ciudadesForSelect.forEach(element => {
            $('#select-ciudadesForSelect').append('<option value="'+element.id_city+'">'+element.name_city+'</option>');
          });
          console.log(this.ciudadesForSelect);
        });
        */

    this.datos_miembro_formulario = this.formBuilder.group({
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
    return this.datos_miembro_formulario.controls; 
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
    // console.log("VALORES DEL FORMULARIO -->" + this.datos_miembro_formulario.value);
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
    var fecha_partida = this.fecha_nacimiento.split("/", 3);
    var fecha_nueva = new Date();  
    console.log("FECHA EN POSICION [1] --> " + (Number)(fecha_partida[1]));
    fecha_nueva.setDate((Number)(fecha_partida[0])-1);
    fecha_nueva.setMonth((Number)(fecha_partida[1])-1);
    fecha_nueva.setFullYear((Number)(fecha_partida[2]));
    this.member.dateOfBirth = fecha_nueva;
    // this.miembroPrueba.gender = "M";
    this.member.is_active_user = true;
    this.member.image_profile_member = "image_url_prueba";
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

    // console.log("Esto retorna la dirección ---> " + this.member.dateOfBirth.getDay);
    // this.direccionService.guardarDireccion(this.direccionNueva).subscribe(
    //   (data)=> {console.log("Lo que retorna el server tras agregar la dirección",  data)
    //       if(data != null){
    //         // console.log("OK DIRECIÓN");
    //       }else{
    //         // console.log("validar que los datos esten correctos");
    //       }
    //   }
    // );
    this.miembrosService.guardarMiembro(this.member).subscribe(
      (data)=> {console.log("Lo que retorna el server tras agregar el miembro",  data)
          if(data != null){
            // console.log("OK MIEMBRO");
          }else{
            // console.log("validar que los datos esten correctos");
          }
      }
    );
  }

 vaciarCampos(){
   this.datos_miembro_formulario.patchValue({
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
  