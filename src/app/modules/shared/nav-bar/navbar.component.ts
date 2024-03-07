import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private router = inject(Router)
  private state = inject(StateService)

  usuarioLogado$ = this.state.getUsuarioLogado()

  handleLogin() {
    localStorage.removeItem('token')
    this.state.setUsuarioLogado()
    this.router.navigate(['/login'])
  }
}
