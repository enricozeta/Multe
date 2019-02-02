import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login-form';
import { Token } from './token';
import { environment } from '@env/environment';
import { BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login(loginForm: LoginForm) {
    this.loggedIn.next(true);
    const url = environment.baseUrl + '/api/auth/signin';
    return this.http.post<Token>(url, loginForm);
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  get isLoggedIn() {
    return this.loggedIn;
  }
}
