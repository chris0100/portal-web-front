import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {Router} from '@angular/router';
import {Usuario} from '../usuario';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-clientes',
  templateUrl: './login-clientes.component.html'
})


export class LoginClientesComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router, private authService: AuthService) {
    // Instanciacion de usuario
    this.usuario = new Usuario();
  }

  ngOnInit(): void {


    // Revisa si el usuario esta autenticado, para redireccionar
    if (this.authService.isAuthenticated()) {
      swal.fire('Login invalido', `Hola ${this.authService.usuario.username}, ya se encuentra logueado`, 'info');
      this.router.navigate(['/panel-clientes']);
    }
  }




  // Ingreso para redireccionar a el menu de Cliente
  loginCliente(): void {

    // Revisa que no esten vacios los campos
    if (this.usuario.username == null || this.usuario.password == null) {
      swal.fire('Error de ingreso', 'Username o Password vacios', 'error');
      return;
    }

    // Se llama al servicio para realizar el login
    this.authService.login(this.usuario).subscribe(
      response => {

        // Guardar el usuario
        this.authService.guardarUsuario(response.access_token);

        // Guardar el token
        this.authService.guardarToken(response.access_token);

        // Se crea la variable usuario
        const usuario = this.authService.usuario;

        // Redirecciona a la pagina principal con mensaje de bienvenida
        swal.fire('Login', `Bienvenido ${usuario.username}, has iniciado sesión correctamente`, 'success');
        this.router.navigate(['/panel-clientes']);
      },
      error => {
        if (error.status === 400) {
          swal.fire('Error Login', 'Username o Password incorrectos', 'error');
        }
      }
    );
  }

}
