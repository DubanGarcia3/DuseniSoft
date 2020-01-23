import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { PedidosComponent } from '../pedidos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-pedido',
  templateUrl: './delete-pedido.component.html',
  styleUrls: ['./delete-pedido.component.css']
})
export class DeletePedidoComponent implements OnInit {

  constructor(private pedidosService: PedidosService,
     private router: Router,
     private pedidosComponent: PedidosComponent) { }

  ngOnInit() {
  }

  eliminarPedido() {
    this.pedidosService.deletePedido(this.pedidosComponent.idPedido).subscribe(
      (data) => {
        console.log("Lo que retorna el server tras borrar el pedido", data)
        this.pedidosComponent.recargarPedidos();
      },
      error => console.log(error));

  }
}
