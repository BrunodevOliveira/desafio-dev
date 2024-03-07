import { Component, OnInit, inject } from '@angular/core';
import { Ticket } from 'src/app/models/tickets.interface';
import { TicketsService } from '../../tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit  {
  ticketsService = inject(TicketsService)
  tickets!: Ticket[]
  isLoading = false
  error?: string | null

  ngOnInit(): void {
    this.isLoading = true
    this.ticketsService.getTickets()
      .subscribe({
        next: ({ result }) => this.tickets = result,
        complete: () => this.isLoading = false,
        error: (e) => {
          console.error('Error aqui', e)
          this.isLoading = false
          this.error = 'Não foi possível exibir os tickets no momento. Tente novamente mais tarde.'
        }
      })
  }

}

