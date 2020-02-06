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
import { City } from 'src/app/Modelo/City';
import { PedidosComponent } from '../pedidos.component';

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
  datos_pedido_formulario: FormGroup;
  idProductoFromSelect: number;
  cantidad: number;
  fecha: Date = new Date();

  constructor(private pedidosService: PedidosService,
    private productosService: ProductosService,
    private asociacionesService: AsociacionesService,
    private pedidosComponent: PedidosComponent,
    private router: Router, private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => { this.productosForSelect = data; });
    //Aqui ponga la direccion de la asociacion por defecto como direccion del pedido
    this.asociacionesService.getAsociacionId(326533).subscribe(data => {
      this.pedidoAEditar.address_request =  new Address();
      // this.pedidoAAgregar.address_request.id_address = data.address.id_address;
      this.pedidoAEditar.address_request.address_description = data.address.address_description;
      this.pedidoAEditar.address_request.city = new City();
      this.pedidoAEditar.address_request.city.id_city = data.address.city.id_city;
      // this.pedidoAAgregar.address_request.city = data.address.city;
      // this.pedidoAAgregar.address_request = data.address;
      this.direccionEntrega = data.address.address_description;
    });
    this.datos_pedido_formulario_edit = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_limite: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  get formulario(){
    return this.datos_pedido_formulario_edit.controls; 
  }

  loadPedidoAEditar(){
    this.pedidoAEditar = this.pedidosComponent.getPedidoAEditar();
    // this.fecha = this.pedidoAEditar.limit_date_request;
  //   this.fecha_nacimiento = this.pedidoAEditar.dateOfBirth.toString();
    // var fecha_partida = this.pedidoAEditar.limit_date_request.toString().split("-", 3);
  //   this.fecha_nacimiento = fecha_partida[2]+'/'+fecha_partida[1]+'/'+fecha_partida[0];
  //   this.generoSeleccionado = this.auxMiembro.gender=="M" ? "Masculino" : "Femenino";
  // }
  }

  compararProductos(product1: Product, product2: Product){
    if (product1==null || product2==null) {
      return false;
    }
    return product1.name_product===product2.name_product;
  }

  editarPedido() {
    this.pedidosService.updatePedido(this.pedidoAEditar)
      .subscribe(data => {
        this.pedidoAEditar = data;
        alert("Se actualizo el miembro");
        this.router.navigate(["app-pedidos"]);
      });
       //TO-DO Arreglar éstas dos fechas
    // this.pedidoAAgregar.creation_date_request = new Date();
    // this.pedidoAAgregar.creation_date_request = this.fecha;
    // this.pedidoAAgregar.limit_date_request = new Date();
    // this.pedidoAAgregar.limit_date_request = this.fecha;

    // this.pedidoAAgregar.product = new Product();
    // this.pedidoAAgregar.product.id_product =  this.idProductoFromSelect;
    // this.pedidoAAgregar.is_active = true;
    
    // this.pedidosService.guardarPedido(this.pedidoAAgregar).subscribe(
    //   (data)=> {console.log("Lo que retorna el server tras agregar el pedido",  data)
    //   if(data != null){
    //     console.log("OK PEDIDO " + data);
    //     this.pedidosComponent.recargarPedidos();
    //       }else{
    //         console.log("validar que los datos esten correctos " + data);
    //         this.pedidosComponent.recargarPedidos();
    //       }
    //   }
    // );
  }

  vaciarCampos(){
    this.datos_pedido_formulario_edit.patchValue({
      producto: '',
      cantidad: '',
      descripcion:'',
      precio: ''
    });
    this.datos_pedido_formulario_edit = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_limite: ['', Validators.required],
      precio: ['', Validators.required]
    });
    this.productosService.getProductos().subscribe(data => { this.productosForSelect = data; });
  }
}
