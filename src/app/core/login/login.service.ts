import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginForm } from './login-form';
import { Token } from './token';
import { environment } from '@env/environment';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  login(loginForm: LoginForm) {
    const url = environment.baseUrl + '/api/auth/signin';
    return this.http.post<Token>(url, loginForm);
  }

}
