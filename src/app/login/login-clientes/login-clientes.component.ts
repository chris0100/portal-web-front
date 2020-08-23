import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-clientes',
  templateUrl: './login-clientes.component.html'
})



export class LoginClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // Login por el menu de Cliente
  loginCliente(): void {

    // Redirecciona a la pagina principal con mensaje de bienvenida
    swal.fire('Login', 'Bienvenido Cliente, has iniciado sesión correctamente', 'success');
    this.router.navigate(['/panel-clientes']);
  }

}
