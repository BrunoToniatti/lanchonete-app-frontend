import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.scss']
})
export class Produtos {
  
  constructor(private router: Router) {}

  // Produtos hardcoded
  produtos = [
    { id: 1, nome: 'Hambúrguer Especial', categoria: 'Lanches', preco: 25.90, estoque: 45, status: 'Disponível', descricao: 'Hambúrguer artesanal com carne bovina, queijo, alface e tomate' },
    { id: 2, nome: 'Pizza Margherita', categoria: 'Pizzas', preco: 35.00, estoque: 30, status: 'Disponível', descricao: 'Pizza tradicional com molho de tomate, mussarela e manjericão' },
    { id: 3, nome: 'Salada Caesar', categoria: 'Saladas', preco: 18.50, estoque: 20, status: 'Disponível', descricao: 'Salada com alface americana, croutons, parmesão e molho caesar' },
    { id: 4, nome: 'Refrigerante 350ml', categoria: 'Bebidas', preco: 5.90, estoque: 3, status: 'Estoque Baixo', descricao: 'Refrigerante gelado diversos sabores' },
    { id: 5, nome: 'Sobremesa do Dia', categoria: 'Sobremesas', preco: 15.00, estoque: 0, status: 'Indisponível', descricao: 'Sobremesa especial que varia diariamente' },
    { id: 6, nome: 'X-Salada', categoria: 'Lanches', preco: 22.50, estoque: 35, status: 'Disponível', descricao: 'Hambúrguer com salada, queijo, presunto e molho especial' },
    { id: 7, nome: 'Suco Natural', categoria: 'Bebidas', preco: 8.90, estoque: 25, status: 'Disponível', descricao: 'Suco natural de frutas da estação' },
    { id: 8, nome: 'Pastel Assado', categoria: 'Salgados', preco: 12.00, estoque: 15, status: 'Disponível', descricao: 'Pastel assado com recheios variados' }
  ];

  // Resumo dos produtos
  resumoProdutos = {
    total: 8,
    disponiveis: 6,
    estoqueBaixo: 1,
    indisponiveis: 1,
    valorMedio: 18.71
  };

  voltarInterno() {
    this.router.navigate(['/interno']);
  }

  irParaNovoProduto() {
    this.router.navigate(['/novo-produto']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'disponível':
        return 'status-disponivel';
      case 'estoque baixo':
        return 'status-baixo';
      case 'indisponível':
        return 'status-indisponivel';
      default:
        return 'status-default';
    }
  }

  getStatusIcon(status: string): string {
    switch(status.toLowerCase()) {
      case 'disponível':
        return '✅';
      case 'estoque baixo':
        return '⚠️';
      case 'indisponível':
        return '❌';
      default:
        return '❓';
    }
  }

  getCategoriaIcon(categoria: string): string {
    switch(categoria) {
      case 'Lanches': return '🍔';
      case 'Pizzas': return '🍕';
      case 'Saladas': return '🥗';
      case 'Bebidas': return '🥤';
      case 'Sobremesas': return '🍰';
      case 'Salgados': return '🥟';
      default: return '🍽️';
    }
  }

  editarProduto(id: number) {
    console.log('Editar produto:', id);
    // Aqui seria a navegação para edição
  }

  excluirProduto(id: number) {
    console.log('Excluir produto:', id);
    // Aqui seria a lógica de exclusão
  }
}
