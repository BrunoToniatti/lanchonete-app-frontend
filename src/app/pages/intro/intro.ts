import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss'
})
export class Intro implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Redireciona após 3 segundos
    setTimeout(() => {
      // this.router.navigate(['/home']); // Descomente quando tiver a rota home
    }, 3000);
  }
}
