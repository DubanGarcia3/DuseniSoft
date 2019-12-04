import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarDialog(){
    console.log("dio click al boton del modal");
  }
}
