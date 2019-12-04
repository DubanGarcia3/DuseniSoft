import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  mostrarDialog(){
    console.log("dio click al boton del modal");
  }

  toHome(){
    this.router.navigate(["app-inicio"]);
  }
}