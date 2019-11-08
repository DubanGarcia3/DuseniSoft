import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(["app-login"]);
  }

  contactUs(){
    console.log("vista contacto");
    this.router.navigate(["app-contacto"]);
  }

  about(){
    console.log("vista acerca de");
    this.router.navigate(["app-acercade"]);
  }

}
