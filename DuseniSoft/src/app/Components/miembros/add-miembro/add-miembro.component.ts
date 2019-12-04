import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Member } from 'src/app/Modelo/Member';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-miembro',
  templateUrl: './add-miembro.component.html',
  styleUrls: ['./add-miembro.component.css']
})
export class AddMiembroComponent implements OnInit {

  datos_miembro_formulario: FormGroup;
  
  constructor(private miembrosService: MiembrosService, private formBuilder: FormBuilder) { }

  member: Member = new Member();

  ngOnInit() {
    this.datos_miembro_formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      telefono: ['', Validators.required]
    });    
  }

  get f(){return this.datos_miembro_formulario.controls;}
  addMember(){
    this.miembrosService.guardarMiembro(this.member).subscribe();
  }

}
