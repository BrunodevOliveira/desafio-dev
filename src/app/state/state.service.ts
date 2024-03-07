import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private usuarioLogado = new BehaviorSubject<null | string>(this.getNomeUsuarioToken())

  getUsuarioLogado() {
    return this.usuarioLogado.asObservable()
  }

  setUsuarioLogado() {
    // const token = localStorage.getItem('token');
    // if(token) {
    //   const decodedToken: any = jwtDecode(token);
    //   this.usuarioLogado.next(decodedToken?.name)
    // }
    this.usuarioLogado.next(this.getNomeUsuarioToken())
  }

  private getNomeUsuarioToken() {
    const token = localStorage.getItem('token');
    if(token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.name
    }
    return null
  }
}
