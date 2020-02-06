import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { MiembrosService } from 'src/app/Servicios/miembros.service';

@Component({
  selector: 'app-total-producto',
  templateUrl: './total-producto.component.html',
  styleUrls: ['./total-producto.component.css']
})
export class TotalProductoComponent implements OnInit {

  constructor(private miembrosService:MiembrosService, private productService: ProductosService) { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [50, 600, 260, 700], label: 'Papa' },
    { data: [120, 455, 100, 340], label: 'Arveja' },
    { data: [45, 67, 800, 500], label: 'Zanahoria' }
  ];

  chartLabels = ['Noviembre', 'Diciembre', 'Enero', 'Febrero'];

  onChartClick(event) {
    console.log(event);
  }

}
