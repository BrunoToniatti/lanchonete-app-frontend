import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novo-produto.html',
  styleUrls: ['./novo-produto.scss']
})
export class NovoProduto {
  
  constructor(private router: Router) {}

  // Dados do formulário
  produto = {
    nome: '',
    categoria: '',
    preco: 0,
    estoque: 0,
    descricao: '',
    status: 'Disponível'
  };

  // Categorias disponíveis
  categorias = [
    'Lanches',
    'Pizzas', 
    'Saladas',
    'Bebidas',
    'Sobremesas',
    'Salgados',
    'Combos',
    'Acompanhamentos'
  ];

  voltarProdutos() {
    this.router.navigate(['/produtos']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  salvarProduto() {
    // Validação simples
    if (!this.produto.nome || !this.produto.categoria || this.produto.preco <= 0) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Aqui seria a lógica para salvar o produto
    console.log('Produto a ser salvo:', this.produto);
    
    // Simular sucesso
    alert('Produto cadastrado com sucesso!');
    
    // Voltar para a lista de produtos
    this.voltarProdutos();
  }

  limparFormulario() {
    this.produto = {
      nome: '',
      categoria: '',
      preco: 0,
      estoque: 0,
      descricao: '',
      status: 'Disponível'
    };
  }

  getCategoriaIcon(categoria: string): string {
    switch(categoria) {
      case 'Lanches': return '🍔';
      case 'Pizzas': return '🍕';
      case 'Saladas': return '🥗';
      case 'Bebidas': return '🥤';
      case 'Sobremesas': return '🍰';
      case 'Salgados': return '🥟';
      case 'Combos': return '🍱';
      case 'Acompanhamentos': return '🍟';
      default: return '🍽️';
    }
  }
}
