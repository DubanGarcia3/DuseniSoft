import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modelo/Product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { AsociacionesService } from 'src/app/Servicios/asociaciones.service';
import { PedidosComponent } from '../../pedidos/pedidos.component';
import { Association } from 'src/app/Modelo/Association';

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

  addProduct(){
    // console.log('DATOS DEL PRODUCTO CREADO');
    // console.log('ID '+ this.productoAAgregar.id_product);
    // console.log('NOMBRE '+ this.productoAAgregar.name_product);
    // console.log('IMAGEN '+ this.productoAAgregar.product_image);
    //326533 id asociacion
    this.productoAAgregar.association = new Association();
    this.productoAAgregar.association.id_association = 326533;
    // this.asociacionesService.getAsociacionId(326533).subscribe(data => {
    //   this.productoAAgregar.association = data;
    // });
    this.productosService.guardarProducto(this.productoAAgregar).subscribe(data =>{
      if(data != null){
        alert('Producto guardado con exito');
        this.vaciarCampos();
      }else{
        console.log("validar que los datos esten correctos " + data);
        this.vaciarCampos();
      }
    });
    console.log('ASOCIACIÓN ID '+ this.productoAAgregar.association.id_association);
  }

  vaciarCampos(){
    this.datos_producto_formulario = this.formBuilder.group({
      //[Valor inicial del campo, Validadores síncronos, Validadores asíncronos]
      nombre_producto: ['', Validators.required],
      foto_producto: ['', Validators.required]
    });
  }
}
