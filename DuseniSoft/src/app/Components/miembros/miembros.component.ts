import { Component, OnInit, NgModule } from '@angular/core';
import { MiembrosService } from 'src/app/Servicios/miembros.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/Modelo/Member';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {

  constructor(private service: MiembrosService, private router: Router) { 
    
  }
  dtOption: any = {};
  miembros: Member[];
  buscarMiembroFiltro;
  
  ngOnInit() {
    this.service.getMiembros().subscribe(data => { this.miembros = data; });
    this.loadDataTable();
  }
  loadDataTable() {
    
  }
}
