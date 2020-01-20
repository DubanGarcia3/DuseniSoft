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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMiembroComponent} from './Components/miembros/add-miembro/add-miembro.component';


import{LoginService} from 'src/app/servicios/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeNavComponent } from './Components/tree-nav/tree-nav.component';
import { LogOutComponent } from './Components/login/log-out/log-out.component';
import { IconBarComponent } from './Components/inicio/icon-bar/icon-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DeleteMiembroComponent } from './Components/miembros/delete-miembro/delete-miembro.component';
import { EditMiembroComponent } from './Components/miembros/edit-miembro/edit-miembro.component';
import { DeletePedidoComponent } from './Components/pedidos/delete-pedido/delete-pedido.component';
import { EditPedidoComponent } from './Components/pedidos/edit-pedido/edit-pedido.component';
import { VerMiembroComponent } from './Components/miembros/ver-miembro/ver-miembro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    InicioComponent,
    StatisticsComponent,
    PedidosComponent,
    AddPedidoComponent,
    MiembrosComponent,
    AddMiembroComponent,
    TreeNavComponent,
    LogOutComponent,
    IconBarComponent,
    DeleteMiembroComponent,
    EditMiembroComponent,
    DeletePedidoComponent,
    EditPedidoComponent,
    VerMiembroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
