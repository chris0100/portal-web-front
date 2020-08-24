import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PanelClientesComponent} from './panel-clientes/panel-clientes.component';
import {ConfiguracionComponent} from './configuracion/configuracion.component';
import {ListaUsuariosComponent} from './lista-usuarios/lista-usuarios.component';
import {CrearUsuarioComponent} from './crear-usuario/crear-usuario.component';
import {CrearPedidoComponent} from './crear-pedido/crear-pedido.component';
import {PedidosBorradorComponent} from './pedidos-borrador/pedidos-borrador.component';
import {HistorialPedidosComponent} from './historial-pedidos/historial-pedidos.component';
import {PedidosVerificacionComponent} from './pedidos-verificacion/pedidos-verificacion.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'panel-clientes', component: PanelClientesComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'lista-usuarios', component: ListaUsuariosComponent},
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'crear-pedido', component: CrearPedidoComponent},
  {path: 'pedidos-borrador', component: PedidosBorradorComponent},
  {path: 'historial-pedidos', component: HistorialPedidosComponent},
  {path: 'pedidos-verificacion',  component: PedidosVerificacionComponent}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
