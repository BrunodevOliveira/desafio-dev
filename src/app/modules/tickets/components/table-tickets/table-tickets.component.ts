import { AfterViewInit, Component, Input, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/app/models/tickets.interface';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';

@Component({
  selector: 'app-table-tickets',
  templateUrl: './table-tickets.component.html',
  styleUrls: ['./table-tickets.component.scss'],
})
export class TableTicketsComponent implements AfterViewInit {
  dialog = inject(MatDialog)

  displayedColumns: string[] = [
    'situacao',
    'prioridade',
    'origem',
    'solicitado',
    'prazo',
    'nota',
    'detalhes',
  ];
  dataSource!: MatTableDataSource<Ticket>;
  tickets!: Ticket[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input('tickets') set setTickets(t: Ticket[]) {
    this.tickets = t;
    this.dataSource = new MatTableDataSource(this.tickets);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewDetails(ticket: Ticket) {
    this.dialog.open(TicketDetailsComponent, {
      width: window.innerWidth < 600 ? '100vw' : '600px',
      height: window.innerWidth < 600 ? '100vh' : 'normal',
      maxWidth: window.innerWidth < 600 ? '100%' : 'normal',
      maxHeight: window.innerWidth < 600 ? '100%' : 'normal',
      data: ticket,
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms'
   });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
