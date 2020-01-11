import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

import { Router } from '@angular/router';
import{Location} from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';
  public isLoginOK: boolean;

  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log("correo",this.email);
    
    this.loginService.getLoginAdmin(this.email, this.password)
    .subscribe(
      (data)=> {
        console.log("Estos son los datos que se ingresaron para el login admin",  data)
        this.router.navigate(["app-inicio"]);
          if(data != "[]" ){
          }else{
            console.log("validar que los datos esten correctos");
          }
      }
    );
  }  
}
