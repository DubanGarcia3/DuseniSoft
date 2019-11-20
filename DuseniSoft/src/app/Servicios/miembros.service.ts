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
    return this.http.get<Member[]>(this.Url+"allMembers");
  }

  guardarMiembro(miembro:Member){
    return this.http.post<Member>(this.Url,miembro);
  }

  getMiembroId(cedula_member:number){
    return this.http.get<Member>(this.Url+"member/"+cedula_member);
  }

  updateMiembro(miembro:Member){
    return this.http.put<Member>(this.Url+"/editMember"+miembro.cedula_member,miembro);
  }

  Miembro(miembro:Member){
    return this.http.delete<Member>(this.Url+"/"+miembro.cedula_member);
  }
}
