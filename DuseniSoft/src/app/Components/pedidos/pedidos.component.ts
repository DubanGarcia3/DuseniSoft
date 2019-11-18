import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }


  /*
  idPedido: number;
    quantity: number;
    dateOrder:Date;
    dateLimmit: Date;
    unitPrice: number;
    isActive:boolean;
    */

  public PedidoList = [
    { idPedido: 0, quantity: 100, dateOrder: new Date("2018-03-16"), dateLimmit: new Date("2018-03-16"), unitPrice: 50, isActive: true },
    { idPedido: 1, quantity: 200, dateOrder: new Date("2018-03-16"), dateLimmit: new Date("2018-03-16"), unitPrice: 50, isActive: true },
    { idPedido: 2, quantity: 300, dateOrder: new Date("2018-03-16"), dateLimmit: new Date("2018-03-16"), unitPrice: 50, isActive: true },
  ];

  getPedidosQuemados() {
    return this.PedidoList;
  }
}
