import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";

@Component({
  selector: 'app-interno',
  imports: [CommonModule, Header],
  templateUrl: './interno.html',
  styleUrl: './interno.scss'
})
export class Interno {

  constructor(private router: Router) {}

  // Navegar para página de agendamentos
  irParaAgendamentos() {
    this.router.navigate(['/agendamentos']);
  }

  // Navegar para página de andamento
  irParaAndamento() {
    this.router.navigate(['/andamento']);
  }

  // Navegar para página de vendas
  irParaVendas() {
    this.router.navigate(['/vendas']);
  }

  // Navegar para página de produtos
  irParaProdutos() {
    this.router.navigate(['/produtos']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'confirmado':
      case 'disponível':
      case 'entregue':
        return 'status-success';
      case 'pendente':
      case 'preparando':
        return 'status-warning';
      case 'cancelado':
      case 'indisponível':
        return 'status-danger';
      case 'estoque baixo':
        return 'status-warning';
      default:
        return 'status-default';
    }
  }
}
