import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';


@NgModule({
  declarations: [ModalConfirmacaoComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ModalConfirmacaoComponent,
  ]
})
export class ModalsModule { }
