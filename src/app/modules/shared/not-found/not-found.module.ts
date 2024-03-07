import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
