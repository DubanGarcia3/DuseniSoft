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
    let bool;
    this.loginService.getLogin(this.email, this.password)
    .subscribe(
      (data)=> {
        // if(data){
          
        // }else{
        //   this.router.navigate(["app-inicio"]);
        //   console.log("te jodiste");
        // }
        // bool=data;
        console.log(data);
       
      }
    );
    console.log(bool);
  }

  
}
