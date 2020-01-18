import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { Product } from 'src/app/Modelo/Product';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Request } from 'src/app/Modelo/Request';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  datos_pedido_formulario: FormGroup;
  pedidoAAgregar: Request = new Request();
  productoFromSelect: Product = new Product();
  productosForSelect: Product[];
  cantidad: number;

  constructor(private pedidosService: PedidosService,
    //TO-DO Servicio de productos
    private productosService: ProductosService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    //TO-DO Cargar los productos al select
    this.productosService.getProductos().subscribe(data => { this.productosForSelect = data; });

    this.datos_pedido_formulario = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  get formulario(){
    return this.datos_pedido_formulario.controls; 
  }

  getProductFromSelect(){
    console.log("PRODUCTO " + this.productoFromSelect.name_product);
  }

  addPedido(){
    
  }

  vaciarCampos(){
    this.datos_pedido_formulario.patchValue({
      producto: '',
      cantidad: '',
      descripcion:'',
      precio: ''
    });
  }

}
