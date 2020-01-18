import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from '../Modelo/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  Url = 'http://localhost:8081/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  constructor(private http:HttpClient) { }

  getProductos() {
    return this.http.get<Product[]>(this.Url+"allProducts");
  }

  guardarProducto(product:Product){
    return this.http.post<Product>(this.Url+"addProduct", product);
  }

  getProductId(id_product:number){
    return this.http.get<Product>(this.Url+"product/"+id_product);
  }

  updateProducto(product:Product){
    return this.http.put<Product>(this.Url+"editProduct"+product.id_product, product);
  }

  deleteProducto(id_product:number){
    return this.http.delete<Product>(this.Url+"removeProduct/"+id_product);
  }
}
