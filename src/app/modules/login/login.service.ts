import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { LoginResponse } from 'src/app/models/login.interface';
import { StateService } from 'src/app/state/state.service';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient)
  private state = inject(StateService)
  private baseUrl: string = enviroment.baseUrl
  private endpoint: string = enviroment.endpoints.login

  login(usuario: string, senha: string) {
    const url = this.baseUrl + this.endpoint
    return this.http.post<LoginResponse>(url, this.payloadLogin(usuario, senha))
      .pipe(
        tap(({ sessionID }) => sessionID && this.setToken(sessionID)),
        catchError(e => throwError(() => e.error.error.description))
      )
  }

  private payloadLogin(usuario: string, senha: string) {
    const payload = {
      clientID: 'API_PBI',
      language: 'pt_BR',
      userName: 'citsmart.local\\' + usuario,
      password: senha,
    };

    return payload
  }

  private setToken(token: string) {
    localStorage.setItem('token', token)
    this.state.setUsuarioLogado()
  }
}
