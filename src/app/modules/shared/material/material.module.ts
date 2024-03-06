import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const modules = [
  MatInputModule,
  MatButtonModule,
  MatIconModule
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
