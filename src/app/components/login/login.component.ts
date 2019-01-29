import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '@app/core/login/login.service';
import { LoginForm } from '@app/core/login/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  loginForm: LoginForm = new LoginForm();
  result: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  _login(): void {
    this.loginService.login(this.loginForm).subscribe(data => {
      localStorage.setItem('jwt_token', data.accessToken);
      this.router.navigate(['/home']);
    });
  }

}
