import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { TableTicketsComponent } from './components/table-tickets/table-tickets.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';


@NgModule({
  declarations: [
    TicketsComponent,
    TableTicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export default class TicketsModule { }
