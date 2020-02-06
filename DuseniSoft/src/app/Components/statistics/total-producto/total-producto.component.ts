import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { MiembrosService } from 'src/app/Servicios/miembros.service';

@Component({
  selector: 'app-total-producto',
  templateUrl: './total-producto.component.html',
  styleUrls: ['./total-producto.component.css']
})
export class TotalProductoComponent implements OnInit {

  Nombre :  String ; 
  total : String [] = [];
  meses : String [] = [];
  producto : Number[] = [];


  constructor(private miembrosService:MiembrosService, private productService: ProductosService) { }

  ngOnInit() {
    
  }

 

  generarGrafica(nombre: any){
    
    this.Nombre  = nombre; 
    this.productService.getTotalAportesporMesPorProducto(nombre).subscribe(
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


  chartOptions = {
    responsive: true
  };
  

  
  chartData = [
    { data: this.producto, label: this.Nombre }

  ];

 

  chartLabels = this.meses;

  onChartClick(event) {
    console.log(event);
  }

}

