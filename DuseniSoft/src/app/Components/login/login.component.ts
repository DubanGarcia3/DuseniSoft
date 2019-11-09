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
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(["app-inicio"]);
  }

  
}
