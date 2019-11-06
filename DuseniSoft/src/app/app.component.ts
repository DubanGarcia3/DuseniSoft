import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DuseniSoft';

  constructor(private router:Router){
    this.inicio();
  }

  welcome(){
    this.router.navigate(["app-welcome"]);
  }

  login(){
    console.log("entra al login");
    this.router.navigate(["app-login"]);

  }

  inicio(){
    console.log("entra al inicio");
    this.router.navigate(["app-inicio"]);
  }

  estadisticas(){
    this.router.navigate(["app-statistics"]);
  }
 
}
