import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modelo/Product';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  productoAAgregar: Product = new Product();
  datos_producto_formulario: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
