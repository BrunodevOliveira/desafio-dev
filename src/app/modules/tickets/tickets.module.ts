import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { NotFoundModule } from '../shared/not-found/not-found.module';
import { TableTicketsComponent } from './components/table-tickets/table-tickets.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';


@NgModule({
  declarations: [
    TicketsComponent,
    TableTicketsComponent,
    TicketDetailsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MaterialModule,
    HttpClientModule,
    NotFoundModule,
  ]
})
export default class TicketsModule { }
