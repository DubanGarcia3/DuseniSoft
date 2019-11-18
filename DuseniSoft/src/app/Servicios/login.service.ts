import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // cabiar luego por el servicio de login real
  configUrl = 'http://localhost:8082';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });


  getLogin(email: any, password: any) {
       return this.http.get(this.configUrl + '/authenticationMember/email/' + email +'/password/' + password);
  }
}
