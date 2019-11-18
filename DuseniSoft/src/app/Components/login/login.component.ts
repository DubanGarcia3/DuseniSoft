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
    
    this.loginService.getLogin(this.email, this.password)
    .subscribe(
      (data)=> {
        console.log("un mensajito   ----",  data)
          if(data != "[]" ){
            this.router.navigate(["app-inicio"]);
          }else{
            console.log("validar que los datos esten correctos");
          }
      }
    );
  }

  
}
