import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { Router } from '@angular/router';
import { Request } from 'src/app/Modelo/Request';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {



  constructor(private service:PedidosService, private router: Router) {

   }
   dtOption: any = {};
   pedidos: Request[];

  ngOnInit() {
    this.service.getPedidos().subscribe(data => { this.pedidos  = data; });
    this.loadDataTable();
  }


  loadDataTable() {
    
  }

  
}
