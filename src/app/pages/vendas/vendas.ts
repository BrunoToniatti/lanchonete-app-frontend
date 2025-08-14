import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendas.html',
  styleUrls: ['./vendas.scss']
})
export class Vendas {
  
  constructor(private router: Router) {}

  // Estoque diário de lanches disponíveis - hardcoded
  lanchesDisponiveis = [
    {
      id: 1,
      nome: 'X-Burguer Especial',
      categoria: 'Hambúrgueres',
      preco: 18.50,
      estoqueTotal: 20,
      vendidos: 12,
      disponivel: 8,
      status: 'Disponível'
    },
    {
      id: 2,
      nome: 'Pizza Individual Margherita',
      categoria: 'Pizzas',
      preco: 22.90,
      estoqueTotal: 15,
      vendidos: 8,
      disponivel: 7,
      status: 'Disponível'
    },
    {
      id: 3,
      nome: 'Salada Caesar',
      categoria: 'Saladas',
      preco: 16.00,
      estoqueTotal: 10,
      vendidos: 6,
      disponivel: 4,
      status: 'Estoque Baixo'
    },
    {
      id: 4,
      nome: 'Pastel de Frango',
      categoria: 'Salgados',
      preco: 12.50,
      estoqueTotal: 25,
      vendidos: 18,
      disponivel: 7,
      status: 'Disponível'
    },
    {
      id: 5,
      nome: 'Wrap Vegetariano',
      categoria: 'Wraps',
      preco: 14.90,
      estoqueTotal: 12,
      vendidos: 9,
      disponivel: 3,
      status: 'Estoque Baixo'
    },
    {
      id: 6,
      nome: 'Combo Executivo',
      categoria: 'Combos',
      preco: 25.00,
      estoqueTotal: 8,
      vendidos: 8,
      disponivel: 0,
      status: 'Esgotado'
    },
    {
      id: 7,
      nome: 'Sanduíche Natural',
      categoria: 'Naturais',
      preco: 11.90,
      estoqueTotal: 30,
      vendidos: 15,
      disponivel: 15,
      status: 'Disponível'
    },
    {
      id: 8,
      nome: 'Batata Frita Grande',
      categoria: 'Acompanhamentos',
      preco: 8.90,
      estoqueTotal: 40,
      vendidos: 25,
      disponivel: 15,
      status: 'Disponível'
    }
  ];

  // Resumo do dia - hardcoded
  resumoDia = {
    totalVendas: 101,
    faturamento: 1247.30,
    itensEsgotados: 1,
    estoqueBaixo: 2
  };

  voltarInterno() {
    this.router.navigate(['/interno']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponível': return 'status-disponivel';
      case 'Estoque Baixo': return 'status-baixo';
      case 'Esgotado': return 'status-esgotado';
      default: return '';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'Disponível': return '✅';
      case 'Estoque Baixo': return '⚠️';
      case 'Esgotado': return '❌';
      default: return '❓';
    }
  }

  getPercentualVendido(vendidos: number, total: number): number {
    return Math.round((vendidos / total) * 100);
  }

  getCategoriaIcon(categoria: string): string {
    switch (categoria) {
      case 'Hambúrgueres': return '🍔';
      case 'Pizzas': return '🍕';
      case 'Saladas': return '🥗';
      case 'Salgados': return '🥟';
      case 'Wraps': return '🌯';
      case 'Combos': return '🍱';
      case 'Naturais': return '🥪';
      case 'Acompanhamentos': return '🍟';
      default: return '🍽️';
    }
  }
}
