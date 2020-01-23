import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { Product } from 'src/app/Modelo/Product';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Request } from 'src/app/Modelo/Request';
import { AsociacionesService } from 'src/app/Servicios/asociaciones.service';
import { Address } from 'src/app/Modelo/Address';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  datos_pedido_formulario: FormGroup;
  pedidoAAgregar: Request = new Request();
  productosForSelect: Product[];
  idProductoFromSelect: number;
  cantidad: number;
  direccionEntrega: String;

  constructor(private pedidosService: PedidosService,
    private productosService: ProductosService,
    private asociacionesService: AsociacionesService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => { this.productosForSelect = data; });
    //Aqui ponga la direccion de la asociacion por defecto como direccion del pedido
    this.asociacionesService.getAsociacionId(1).subscribe(data => {
      this.pedidoAAgregar.address_request =  new Address();
      this.pedidoAAgregar.address_request = data.address;
      this.direccionEntrega = data.address.address_description;
    });
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

  addPedido(){
    //TO-DO Arreglar éstas dos fechas
    this.pedidoAAgregar.creation_date_request = new Date();
    this.pedidoAAgregar.limit_date_request = new Date();
    //
    this.pedidoAAgregar.product = new Product();
    this.pedidoAAgregar.product.id_product =  this.idProductoFromSelect;
    this.pedidoAAgregar.is_active = true;
    
    this.pedidosService.guardarPedido(this.pedidoAAgregar).subscribe(
      (data)=> {console.log("Lo que retorna el server tras agregar el pedido",  data)
          if(data != null){
            console.log("OK MIEMBRO " + data);
          }else{
            console.log("validar que los datos esten correctos " + data);
          }
      }
    );
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
