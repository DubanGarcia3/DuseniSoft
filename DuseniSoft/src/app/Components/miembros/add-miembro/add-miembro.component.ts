import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Member } from 'src/app/Modelo/Member';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CiudadService } from 'src/app/Servicios/ciudad.service';
import { City } from 'src/app/Modelo/City';

@Component({
  selector: 'app-add-miembro',
  templateUrl: './add-miembro.component.html',
  styleUrls: ['./add-miembro.component.css']
})
export class AddMiembroComponent implements OnInit {

  datos_miembro_formulario: FormGroup;
  ciudades:City[];
  member: Member = new Member();
  
  constructor(private miembrosService: MiembrosService,private CiudadService:CiudadService, private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.CiudadService.getCiudades().subscribe(data => { this.ciudades = data; });
    
    this.datos_miembro_formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      id: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      genero: ['', Validators.required],
      telefono: ['', Validators.required]
    });    
  }

  getTamano(){

    let length = this.ciudades.length;
    for (var i = 0; i < length; i++) {
      console.log(this.ciudades[i]);
    }
  }
  get f(){return this.datos_miembro_formulario.controls;}
  addMember(){
    this.member.cedula_member= 123;
    this.member.first_name="Prueba";
    this.member.second_name="Pruebasn"
    this.member.second_last_name="Pruebaapellido";
    this.member.first_last_name="prueba apellid";
    this.member.email_member="email";
    this.member.password_member="1234";
    this.member.image_profile_member="image_url";
    this.member.gender="M";
    this.member.is_active_user=true;
    this.member.dateOfBirth = new Date("1998-08-03");
    this.member.address = {id_address:null, address_description: 'asdfg', city:{id_city: 1, name_city:null, postal_code:null}};
    this.member.association={id_association:1, name_association:null, email_admin:null, password_admin:null, image_profile_association:null, address:null};

    this.miembrosService.guardarMiembro(this.member).subscribe();
  }

}
