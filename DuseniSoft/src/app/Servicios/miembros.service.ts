import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Member } from '../Modelo/Member';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  Url = 'http://localhost:8081/';

  constructor(private http:HttpClient) { }

  getMiembros() {
    return this.http.get<Member[]>(this.Url);
  }

  guardarMiembro(miembro:Member){
    return this.http.post<Member>(this.Url,miembro);
  }

  getMiembroId(idMiembro:number){
    return this.http.get<Member>(this.Url+"member/"+idMiembro);
  }

  updateMiembro(miembro:Member){
    return this.http.put<Member>(this.Url+"/editMember"+miembro.idMiembro,miembro);
  }

  Miembro(miembro:Member){
    return this.http.delete<Member>(this.Url+"/"+miembro.idMiembro);
  }
}
