import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { PedidosComponent } from './Components/pedidos/pedidos.component';
import { AddPedidoComponent } from './Components/pedidos/add-pedido/add-pedido.component';
import { MiembrosComponent } from './Components/miembros/miembros.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    InicioComponent,
    StatisticsComponent,
    PedidosComponent,
    AddPedidoComponent,
    MiembrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
