import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../Modelo/Request';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  
constructor(private http: HttpClient) {
  
}

// Url = 'http://localhost:8081/';
Url = 'http://3.14.74.92:8081/';


getPedidos() {
  return this.http.get<Request[]>(this.Url+'allRequests');
}

guardarPedido(pedido:Request){
  return this.http.post<Request>(this.Url+'addRequest',pedido);
}

getPedidoId(idPedido:number){
  return this.http.get<Request>(this.Url+"request/"+idPedido);
}

updatePedido(pedido:Request){
  return this.http.put<Request>(this.Url+"editRequest",pedido);
}

deletePedido(id_request:number){
  return this.http.delete<Request>(this.Url+"removeRequest/"+id_request);
}
}