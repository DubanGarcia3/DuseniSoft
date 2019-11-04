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
    this.welcome();
  }

  welcome(){
    this.router.navigate(["app-welcome"]);
  }

  login(){
    this.router.navigate(["app-login"]);
  }
 
}
