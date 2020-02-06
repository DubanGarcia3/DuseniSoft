import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { MiembrosService } from 'src/app/Servicios/miembros.service';

@Component({
  selector: 'app-total-producto',
  templateUrl: './total-producto.component.html',
  styleUrls: ['./total-producto.component.css']
})
export class TotalProductoComponent implements OnInit {

  Nombre :String; 
  label: String;
  total : String [] = [];
  meses : String [] = [];
  producto : Number[] = [];

  constructor(private miembrosService:MiembrosService, private productService: ProductosService) { }

  ngOnInit() {

    this.loadGraphics();
  }

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: this.producto, label: 'Zanahoria' }
  ];

  chartLabels = this.meses;

  onChartClick(event) {
    console.log(event);
  }

  nombre2 :String; 
  label2: String;
  total2 : String [] = [];
  meses2 : String [] = [];
  producto2 : Number[] = [];
  nombre3 :String; 
  label3: String;
  total3 : String [] = [];
  meses3 : String [] = [];
  producto3 : Number[] = [];

  loadGraphics(){
    this.nombre2 = 'papa'; 
    this.label2 = 'papa'; 
    this.productService.getTotalAportesporMesPorProducto(this.nombre2).subscribe(
      data => {
        this.total2 = data;
        console.log(data);
        this.total2.forEach( elemento => {
               this.nombre2 = (elemento[0]) 
               this.meses2.push(elemento[2]);
               this.producto2.push(Number.parseInt(elemento[1]));
        });
      }
    );
    //arveja
    this.nombre3 = 'arveja'; 
    this.label3 = 'arveja'; 
    this.productService.getTotalAportesporMesPorProducto(this.nombre3).subscribe(
      data => {
        this.total3 = data;
        console.log(data);
        this.total3.forEach( elemento => {
               this.nombre3 = (elemento[0]) 
               this.meses3.push(elemento[2]);
               this.producto3.push(Number.parseInt(elemento[1]));
        });
      }
    );
    //zanahoria
    this.Nombre = 'Zanahoria'; 
    this.label = 'Zanahoria'; 
    this.productService.getTotalAportesporMesPorProducto(this.Nombre).subscribe(
      data => {
        this.total = data;
        this.total.forEach( elemento => {
               this.Nombre = (elemento[0]) 
               this.meses.push(elemento[2]);
               this.producto.push(Number.parseInt(elemento[1]));
        });
      }
    );
  }

  chartOptions2 ={
    responsive:true
  };
  chartOptions3 ={
    responsive:true
  };

  chartLabels2 = this.meses2;
  chartLabels3 = this.meses3;

  lineChartColors = [
    {
      backgroundColor: 'green'
    }
  ];
  lineChartColors2 = [
    {
      backgroundColor: 'blue'
    }
  ];
  lineChartColors3 = [
    {
      backgroundColor: 'orange'
    }
  ];

  chartData2 = [
    { data: this.producto2, label: 'papa' }
  ];
  chartData3 = [
    { data: this.producto3, label: 'arveja' }
  ];
  
}