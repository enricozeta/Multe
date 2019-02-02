import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public jwtHelper: JwtHelperService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwt_token');
      let clone: HttpRequest<any>;
      if (token) {
        if (this.jwtHelper.isTokenExpired()) {
          clone = request.clone({
            setHeaders: {
              Accept: `application/json`,
              'Content-Type': `application/json`
            }
          });
          localStorage.removeItem('jwt_token');
          this.router.navigate(['/login']);
        } else {
          clone = request.clone({
            setHeaders: {
              Accept: `application/json`,
              'Content-Type': `application/json`,
              Authorization: `Bearer ${token}`
            }
          });
        }
      }
      if (token == null) {
        clone = request.clone({
          setHeaders: {
            Accept: `application/json`,
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token}`
          }
        });
        localStorage.removeItem('jwt_token');
        this.router.navigate(['/login']);
      }
      return next.handle(clone);
  }
}
