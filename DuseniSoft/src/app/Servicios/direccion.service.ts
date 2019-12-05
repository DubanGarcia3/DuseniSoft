import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Address } from '../Modelo/Address';


@Injectable({
  providedIn: 'root'
})
export class DireccionService {


  Url = 'http://localhost:8081/';

  constructor(private http:HttpClient) { }

  getDireccion() {
    return this.http.get<Address[]>(this.Url+"allAddress");
  }

  guardarDireccion(add:Address){
    return this.http.post<Address>(this.Url+"addAddress",add);
  }


}
