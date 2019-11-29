import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-nav',
  templateUrl: './tree-nav.component.html',
  styleUrls: ['./tree-nav.component.css']
})
export class TreeNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("entra al login");
    this.router.navigate(["app-login"]);

  }

  irPedidos(){
    this.router.navigate(["app-pedidos"]);
  }

  irInicio(){
    console.log("entra al inicio");
    this.router.navigate(["app-inicio"]);
  }


  irEstadisticas(){
    this.router.navigate(["app-statistics"]);
  }

  irMiembros(){
    this.router.navigate(["app-miembros"]);
  }
}