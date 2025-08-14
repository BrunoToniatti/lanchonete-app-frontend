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

  activeTab: string = 'agendamentos';
  selectedDate: string = '2025-08-15'; // Data padrão (hoje)
  
  // Dados hardcoded para demonstração
  agendamentos = [
    { id: 1, cliente: 'Maria Silva', data: '2025-08-15', hora: '12:00', pessoas: 4, mesa: 'Mesa 05', status: 'Confirmado' },
    { id: 2, cliente: 'João Santos', data: '2025-08-15', hora: '13:30', pessoas: 2, mesa: 'Mesa 12', status: 'Pendente' },
    { id: 3, cliente: 'Ana Costa', data: '2025-08-16', hora: '19:00', pessoas: 6, mesa: 'Mesa 08', status: 'Confirmado' },
    { id: 4, cliente: 'Pedro Lima', data: '2025-08-16', hora: '20:30', pessoas: 3, mesa: 'Mesa 15', status: 'Cancelado' },
    { id: 5, cliente: 'Carlos Ferreira', data: '2025-08-15', hora: '18:00', pessoas: 5, mesa: 'Mesa 03', status: 'Pendente' },
    { id: 6, cliente: 'Lucia Oliveira', data: '2025-08-17', hora: '14:30', pessoas: 2, mesa: 'Mesa 07', status: 'Confirmado' }
  ];

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

  // Filtrar agendamentos por data
  get agendamentosFiltrados() {
    return this.agendamentos.filter(agendamento => agendamento.data === this.selectedDate);
  }

  // Contar agendamentos confirmados
  get agendamentosConfirmados() {
    return this.agendamentosFiltrados.filter(a => a.status === 'Confirmado').length;
  }

  // Contar agendamentos pendentes
  get agendamentosPendentes() {
    return this.agendamentosFiltrados.filter(a => a.status === 'Pendente').length;
  }

  // Método para alterar data do filtro
  onDateChange(event: any) {
    this.selectedDate = event.target.value;
  }

  // Confirmar agendamento
  confirmarAgendamento(id: number) {
    const agendamento = this.agendamentos.find(a => a.id === id);
    if (agendamento) {
      agendamento.status = 'Confirmado';
      console.log(`Agendamento ${id} confirmado!`);
    }
  }

  // Recusar agendamento
  recusarAgendamento(id: number) {
    const agendamento = this.agendamentos.find(a => a.id === id);
    if (agendamento) {
      agendamento.status = 'Cancelado';
      console.log(`Agendamento ${id} cancelado!`);
    }
  }

  // Formatar data para exibição
  formatarData(data: string): string {
    const dataObj = new Date(data + 'T00:00:00');
    return dataObj.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
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
