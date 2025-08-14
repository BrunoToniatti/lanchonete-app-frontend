import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-andamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './andamento.html',
  styleUrls: ['./andamento.scss']
})
export class Andamento {
  
  constructor(private router: Router) {}

  // Pedidos hardcoded que foram confirmados
  pedidosConfirmados = [
    {
      id: 1,
      aluno: 'Maria Silva Santos',
      celular: '(11) 98765-4321',
      hora: '12:00',
      lanche: 'X-Burguer Especial + Batata',
      observacoes: 'Sem cebola, molho extra',
      valor: 18.50,
      status: 'Preparando',
      tempoEstimado: '15 min'
    },
    {
      id: 2,
      aluno: 'João Pedro Costa',
      celular: '(11) 99876-5432',
      hora: '12:15',
      lanche: 'Pizza Individual + Refrigerante',
      observacoes: 'Pizza bem assada',
      valor: 22.90,
      status: 'Pronto',
      tempoEstimado: '0 min'
    },
    {
      id: 3,
      aluno: 'Ana Beatriz Lima',
      celular: '(11) 97654-3210',
      hora: '12:30',
      lanche: 'Salada Caesar + Suco Natural',
      observacoes: 'Sem croutons',
      valor: 16.00,
      status: 'Preparando',
      tempoEstimado: '8 min'
    },
    {
      id: 4,
      aluno: 'Carlos Eduardo Ferreira',
      celular: '(11) 95432-1098',
      hora: '12:45',
      lanche: 'Pastel de Frango + Caldo de Cana',
      observacoes: 'Bem quentinho',
      valor: 12.50,
      status: 'Entregue',
      tempoEstimado: 'Finalizado'
    },
    {
      id: 5,
      aluno: 'Lucia Maria Oliveira',
      celular: '(11) 94321-0987',
      hora: '13:00',
      lanche: 'Wrap Vegetariano + Água',
      observacoes: 'Wrap sem molho picante',
      valor: 14.90,
      status: 'Preparando',
      tempoEstimado: '20 min'
    }
  ];

  voltarInterno() {
    this.router.navigate(['/interno']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Preparando': return 'status-preparando';
      case 'Pronto': return 'status-pronto';
      case 'Entregue': return 'status-entregue';
      default: return '';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'Preparando': return '👨‍🍳';
      case 'Pronto': return '✅';
      case 'Entregue': return '📦';
      default: return '⏳';
    }
  }
}
