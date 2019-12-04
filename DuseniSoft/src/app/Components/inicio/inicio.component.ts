import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router){
  }

  ngOnInit() {
  }

  irPedidos(){
    this.router.navigate(["app-pedidos"]);
  }
  irMiembros(){
    this.router.navigate(["app-miembros"]);
  }
  irEstadisticas(){
    this.router.navigate(["app-statistics"]);
  }
  irWelcome(){
    this.router.navigate(["app-welcome"]);
  }
}