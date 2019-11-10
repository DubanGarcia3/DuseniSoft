import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { PedidosComponent } from './Components/pedidos/pedidos.component';
import { AddPedidoComponent } from './Components/pedidos/add-pedido/add-pedido.component';
import { MiembrosComponent } from './Components/miembros/miembros.component';



const routes: Routes = [
  {path:'app-welcome', component:WelcomeComponent},
  {path:'app-login', component:LoginComponent},
  {path:'app-inicio', component:InicioComponent},
  {path:'app-statistics', component:StatisticsComponent},
  {path:'app-pedidos', component: PedidosComponent},
  {path: 'app-add-pedido', component: AddPedidoComponent},
  {path: 'app-miembros', component: MiembrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
