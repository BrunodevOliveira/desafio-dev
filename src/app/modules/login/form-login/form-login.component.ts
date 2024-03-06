import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  loginService = inject(LoginService)

  hide = true
  login = this.fb.nonNullable.group({
    usuario: ['', [Validators.required]],
    senha: ['', [Validators.required]]
  })

  submit() {
    const { usuario, senha } = this.login.value

    if(usuario && senha)
    this.loginService.login(usuario, senha)
      .subscribe({
        next: () => this.router.navigate(['/tickets']),
        error: (e) => console.log('login error:', e)
      })
  }
}
