import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toLogin(){
    this.router.navigate(["app-login"]);
  }

  toWelcome(){
    this.router.navigate(["app-welcome"]);
  }


  toHome(){
    
  }
}
