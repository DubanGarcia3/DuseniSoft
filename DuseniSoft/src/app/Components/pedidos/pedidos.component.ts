import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/Servicios/pedidos.service';
import { Router } from '@angular/router';
import { Request } from 'src/app/Modelo/Request';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditPedidoComponent } from './edit-pedido/edit-pedido.component';
import { Product } from 'src/app/Modelo/Product';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { AsociacionesService } from 'src/app/Servicios/asociaciones.service';
import { Address } from 'src/app/Modelo/Address';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  dtOption: any = {};
  pedidos: Request[];
  filtroBuscarPedidos;
  //editar
  datos_pedido_formulario_editar: FormGroup;
  idPedido: number;
  pedidoAEditar: Request = new Request();
  productosForSelect: Product[];
  direccionEntrega: String;
  

  constructor(private service: PedidosService, private router: Router,
    private pedidosService: PedidosService,
    private productosService: ProductosService,
    private asociacionesService: AsociacionesService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => { this.productosForSelect = data; });
    this.recargarPedidos();
  
    //Aqui ponga la direccion de la asociacion por defecto como direccion del pedido
    this.asociacionesService.getAsociacionId(326533).subscribe(data => {
      this.pedidoAEditar.address_request = new Address();
      this.pedidoAEditar.address_request = data.address;
      this.direccionEntrega = data.address.address_description;
    });
    this.datos_pedido_formulario_editar = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  get formulario(){
    return this.datos_pedido_formulario_editar.controls; 
  }

  recargarPedidos() {
    this.service.getPedidos().subscribe(data => { this.pedidos = data; });
  }

  getPedido() :Request{
    this.service.getPedidoId(this.idPedido).subscribe(data => 
      { this.pedidoAEditar = data; });
    return this.pedidoAEditar;
  }

  convertirFecha(fecha_limite: Date){
    var fecha_partida = fecha_limite.toString().split("-", 3);
    return fecha_partida[2]+'/'+fecha_partida[1]+'/'+fecha_partida[0];
  }

  getIdPedido(id_request: number){
    this.idPedido = id_request;
    console.log('get id pedido, ',  this.idPedido);
    console.log(this.getPedido());
  }

  getPedidoAEditar(): Request{
    return this.pedidoAEditar;
  }

  editarPedido() {
    this.pedidosService.updatePedido(this.getPedido())
      .subscribe(data => {
        this.pedidoAEditar = data;
        alert("Se actualizo el miembro");
        this.router.navigate(["app-pedidos"]);
      });
  }

  lista_aportes: String[];
  verPedido(id_pedido: number){
    this.pedidosService.getContribucionesPorPedido(id_pedido).subscribe(data => {
      this.lista_aportes = data;
    });
  }

  vaciarCampos(){
    this.datos_pedido_formulario_editar.patchValue({
      producto: '',
      cantidad: '',
      descripcion:'',
      precio: ''
    });
  }

}
