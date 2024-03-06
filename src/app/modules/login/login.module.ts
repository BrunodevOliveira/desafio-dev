import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export default class LoginModule { }
