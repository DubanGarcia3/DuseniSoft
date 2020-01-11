import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../Modelo/Member';

@Injectable({
  providedIn: 'root'
})

export class MiembrosService {

  Url = 'http://localhost:8081/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  constructor(private http:HttpClient) { }

  getMiembros() {
    return this.http.get<Member[]>(this.Url+"allMembers");
  }

  guardarMiembro(miembro:Member){
    return this.http.post<Member>(this.Url+"addMember",miembro);
  }

  getMiembroId(cedula_member:number){
    return this.http.get<Member>(this.Url+"member/"+cedula_member);
  }

  updateMiembro(miembro:Member){
    return this.http.put<Member>(this.Url+"editMember"+miembro.cedula_member,miembro);
  }

  deleteMiembro(cedula_member:number){
    return this.http.delete<Member>(this.Url+"removeMember/"+cedula_member);
  }
}
