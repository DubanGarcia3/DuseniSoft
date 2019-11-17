import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // cabiar luego por el servicio de login real
  configUrl = 'http://localhost:8082/Hola';

  getLogin() {
    return this.http.get(this.configUrl);
  }
}
