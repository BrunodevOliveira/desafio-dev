import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketResult } from 'src/app/models/tickets.interface';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private http = inject(HttpClient)
  private baseUrl: string = enviroment.baseUrl
  private endpoint: string = enviroment.endpoints.tickets
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getTickets(): Observable<TicketResult> {
    return this.http.post<TicketResult>(
      this.baseUrl + this.endpoint, this.payloadTicket(), { headers: this.headers }
    )
  }

  private payloadTicket() {
    const token = localStorage.getItem('token') || ''
    const payload = {
      sessionID: token,
      queryName:"DESAFIODEV"
    };

    return payload
  }
}
