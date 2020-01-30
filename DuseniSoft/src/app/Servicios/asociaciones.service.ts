import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Association } from '../Modelo/Association';

@Injectable({
  providedIn: 'root'
})
export class AsociacionesService {
  // Url = 'http://localhost:8081/';
  Url = 'http://3.14.74.92:8081/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  constructor(private http:HttpClient) { }

  getAsociaciones() {
    return this.http.get<Association[]>(this.Url+"allAssociations");
  }

  guardarAsociacion(association:Association){
    return this.http.post<Association>(this.Url+"addAssociation",association);
  }

  getAsociacionId(id_association:number){
    return this.http.get<Association>(this.Url+"association/"+id_association);
  }

  updateAsociacion(association:Association){
    return this.http.put<Association>(this.Url+"editAssociation"+association.id_association,association);
  }

  deleteAsociacion(cedula_member:number){
    return this.http.delete<Association>(this.Url+"removeMember/"+cedula_member);
  }
}
