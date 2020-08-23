import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PanelClientesComponent} from './panel-clientes/panel-clientes.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'panel-clientes', component: PanelClientesComponent}
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
