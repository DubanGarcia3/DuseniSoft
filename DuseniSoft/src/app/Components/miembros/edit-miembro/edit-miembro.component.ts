import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Modelo/Member';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MiembrosComponent } from '../miembros.component';

@Component({
  selector: 'app-edit-miembro',
  templateUrl: './edit-miembro.component.html',
  styleUrls: ['./edit-miembro.component.css']
})
export class EditMiembroComponent implements OnInit {

  miembroAux:Member = new Member();
  memb:FormGroup;
  submitted = false;  

  constructor(private service: MiembrosService, private router: Router,private formBuilder: FormBuilder, private miembro: MiembrosComponent) {  }

  ngOnInit() {
  }

  editarMiembro(){
    let cedula_member = this.miembro.auxCedula;
    this.service.getMiembroId(cedula_member)
    .subscribe(data=>{
      this.miembroAux= data; 
    })
  }
  
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

}
