import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modelo/Product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { AsociacionesService } from 'src/app/Servicios/asociaciones.service';
import { PedidosComponent } from '../../pedidos/pedidos.component';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  productoAAgregar: Product = new Product();
  datos_producto_formulario: FormGroup;

  constructor(
    private productosService: ProductosService,
    private asociacionesService: AsociacionesService,
    private pedidosComponent: PedidosComponent,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.datos_producto_formulario = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      nombre_producto: ['', Validators.required],
      foto_producto: ['', Validators.required]
    });

  }

  get formulario(){
    return this.datos_producto_formulario.controls; 
  }

}
