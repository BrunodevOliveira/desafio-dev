import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private router = inject(Router)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      console.log('Token expirado?', decodedToken.exp < currentTime)

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        return throwError(() => 'Token expirado, por favor faça login novamente.');
      }

      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
