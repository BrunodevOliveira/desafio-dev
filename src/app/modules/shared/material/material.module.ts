import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,

  MatCheckboxModule,
  MatDialogModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatCardModule
]

@NgModule({
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
