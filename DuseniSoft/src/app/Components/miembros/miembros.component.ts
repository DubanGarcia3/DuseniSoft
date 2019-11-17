import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/Modelo/Member';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {
/*
  constructor(private service: MiembrosService,
    private router: Router) { }
*/
  dtOption: any = {};
  productos: Member[];

  ngOnInit() {/*
    this.service.getMiembros.subscribe(data => { this.productos = data; });
    this.loadDataTable();*/
  }
  loadDataTable() {
    
  }

}
