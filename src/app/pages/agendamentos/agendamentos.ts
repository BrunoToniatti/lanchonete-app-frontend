import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamentos',
  imports: [CommonModule],
  templateUrl: './agendamentos.html',
  styleUrl: './agendamentos.scss'
})
export class Agendamentos {
  
  constructor(private router: Router) {}

  selectedDate: string = '2025-08-15'; // Data padrão (hoje)
  
  // Dados hardcoded para demonstração
  agendamentos = [
    { id: 1, aluno: 'Maria Silva Santos', celular: '(11) 98765-4321', data: '2025-08-15', hora: '12:00', lanche: 'X-Burguer Especial + Batata', valor: 18.50, status: 'Confirmado' },
    { id: 2, aluno: 'João Pedro Costa', celular: '(11) 99876-5432', data: '2025-08-15', hora: '13:30', lanche: 'Pizza Individual + Refrigerante', valor: 22.90, status: 'Pendente' },
    { id: 3, aluno: 'Ana Beatriz Lima', celular: '(11) 97654-3210', data: '2025-08-16', hora: '19:00', lanche: 'Salada Caesar + Suco Natural', valor: 16.00, status: 'Confirmado' },
    { id: 4, aluno: 'Pedro Henrique Souza', celular: '(11) 96543-2109', data: '2025-08-16', hora: '20:30', lanche: 'Combo Executivo', valor: 25.00, status: 'Cancelado' },
    { id: 5, aluno: 'Carlos Eduardo Ferreira', celular: '(11) 95432-1098', data: '2025-08-15', hora: '18:00', lanche: 'Pastel de Frango + Caldo de Cana', valor: 12.50, status: 'Pendente' },
    { id: 6, aluno: 'Lucia Maria Oliveira', celular: '(11) 94321-0987', data: '2025-08-17', hora: '14:30', lanche: 'Wrap Vegetariano + Água', valor: 14.90, status: 'Confirmado' }
  ];

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

  // Calcular valor total dos agendamentos do dia
  get valorTotalDia() {
    return this.agendamentosFiltrados
      .filter(a => a.status === 'Confirmado')
      .reduce((total, agendamento) => total + agendamento.valor, 0);
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

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'confirmado':
        return 'status-success';
      case 'pendente':
        return 'status-warning';
      case 'cancelado':
        return 'status-danger';
      default:
        return 'status-default';
    }
  }

  // Voltar para o dashboard interno
  voltarInterno() {
    this.router.navigate(['/interno']);
  }

  // Ir para login (logout)
  logout() {
    this.router.navigate(['/login']);
  }
}
