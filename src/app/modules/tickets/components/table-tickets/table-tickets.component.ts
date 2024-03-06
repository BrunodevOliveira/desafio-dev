import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/app/models/tickets.interface';

@Component({
  selector: 'app-table-tickets',
  templateUrl: './table-tickets.component.html',
  styleUrls: ['./table-tickets.component.scss'],
})
export class TableTicketsComponent implements AfterViewInit {
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

  viewDetails(row: Ticket) {
    console.log('Visualizando detalhes do ticket:', row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
