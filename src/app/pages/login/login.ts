import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  constructor(private router: Router) {}

  onLogin(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login realizado!');
    this.router.navigate(['/interno']); // Redirecionar para área interna
  }

  onRegister() {
    // Aqui você pode adicionar a lógica para criar conta
    console.log('Criar nova conta!');
    // this.router.navigate(['/register']); // Redirecionar para registro
  }
}
