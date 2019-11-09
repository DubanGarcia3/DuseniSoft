import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../Modelo/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {constructor(private http: HttpClient) { }

Url = 'http://localhost:8081/';

getProducto() {
  return this.http.get<Pedido[]>(this.Url+'getRequest');
}

guardarPedido(pedido:Pedido){
  return this.http.post<Pedido>(this.Url+'addRequest',Pedido);
}

getPedidoId(idPedido:number){
  return this.http.get<Pedido>(this.Url+"/"+ idPedido);
}

updatePedido(pedido:Pedido){
  return this.http.put<Pedido>(this.Url+"/"+pedido.idPedido,pedido);
}

deletePedido(pedido:Pedido){
  return this.http.delete<Pedido>(this.Url+"/"+pedido.idPedido);
}
}