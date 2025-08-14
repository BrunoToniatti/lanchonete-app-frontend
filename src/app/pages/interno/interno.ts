import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interno',
  imports: [CommonModule],
  templateUrl: './interno.html',
  styleUrl: './interno.scss'
})
export class Interno {
  
  constructor(private router: Router) {}

  activeTab: string = 'produtos';
  
  // Dados hardcoded apenas para produtos
  produtos = [
    { id: 1, nome: 'Hambúrguer Especial', categoria: 'Lanches', preco: 25.90, estoque: 45, status: 'Disponível' },
    { id: 2, nome: 'Pizza Margherita', categoria: 'Pizzas', preco: 35.00, estoque: 30, status: 'Disponível' },
    { id: 3, nome: 'Salada Caesar', categoria: 'Saladas', preco: 18.50, estoque: 20, status: 'Disponível' },
    { id: 4, nome: 'Refrigerante 350ml', categoria: 'Bebidas', preco: 5.90, estoque: 3, status: 'Estoque Baixo' },
    { id: 5, nome: 'Sobremesa do Dia', categoria: 'Sobremesas', preco: 15.00, estoque: 0, status: 'Indisponível' }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

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
