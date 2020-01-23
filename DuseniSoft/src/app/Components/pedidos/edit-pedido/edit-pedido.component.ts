import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MiembrosComponent } from '../../miembros/miembros.component';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { AsociacionesService } from 'src/app/Servicios/asociaciones.service';
import { Address } from 'src/app/Modelo/Address';
import { Product } from 'src/app/Modelo/Product';
import { Request } from 'src/app/Modelo/Request';

@Component({
  selector: 'app-edit-pedido',
  templateUrl: './edit-pedido.component.html',
  styleUrls: ['./edit-pedido.component.css']
})
export class EditPedidoComponent implements OnInit {

  datos_pedido_formulario_edit: FormGroup;
  pedidoAEditar: Request = new Request();
  productosForSelect: Product[];
  direccionEntrega: String;

  constructor(private pedidosService: PedidosService,
    private productosService: ProductosService,
    private asociacionesService: AsociacionesService,
    private router: Router, private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {/*
    this.productosService.getProductos().subscribe(data => { this.productosForSelect = data; });
    //Aqui ponga la direccion de la asociacion por defecto como direccion del pedido
    this.asociacionesService.getAsociacionId(1).subscribe(data => {
      this.pedidoAEditar.address_request = new Address();
      this.pedidoAEditar.address_request = data.address;
      this.direccionEntrega = data.address.address_description;
    });
    this.datos_pedido_formulario_edit = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  editPedido(pedido: Request) {
    this.pedidosService.updatePedido(pedido)
      .subscribe(data => {
        pedido = data;
        alert("Se actualizo el miembro");
        this.router.navigate(["app-pedidos"]);
      });*/
  }

}
