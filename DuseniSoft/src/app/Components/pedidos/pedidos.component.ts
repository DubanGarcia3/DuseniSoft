import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { Router } from '@angular/router';
import { Request } from 'src/app/Modelo/Request';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  dtOption: any = {};
  pedidos: Request[];
  filtroBuscarPedidos;

  idPedido: number;

  constructor(private service: PedidosService, private router: Router) {

  }

  ngOnInit() {
    this.recargarPedidos();
  }

  recargarPedidos() {
    this.service.getPedidos().subscribe(data => { this.pedidos = data; });
  }

  getIdPedido(id_request: number) {
    this.idPedido = id_request;
  }
}
