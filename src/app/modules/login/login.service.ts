import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient)
  private baseUrl: string = enviroment.baseUrl
  private endpoint: string = enviroment.endpoints.login

  login(usuario: string, senha: string) {
    return this.http.post(this.baseUrl + this.endpoint, this.payloadLogin(usuario, senha))
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
}
