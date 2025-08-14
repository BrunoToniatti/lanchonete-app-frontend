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

  activeTab: string = 'vendas';
  
  // Dados hardcoded para demonstração - apenas vendas e produtos
  vendas = [
    { id: 1, item: 'Hambúrguer Especial', quantidade: 3, preco: 25.90, total: 77.70, status: 'Entregue' },
    { id: 2, item: 'Pizza Margherita', quantidade: 1, preco: 35.00, total: 35.00, status: 'Preparando' },
    { id: 3, item: 'Salada Caesar', quantidade: 2, preco: 18.50, total: 37.00, status: 'Entregue' },
    { id: 4, item: 'Batata Frita Grande', quantidade: 4, preco: 12.90, total: 51.60, status: 'Pendente' }
  ];

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
