import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavBarModule { }
