import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '@app/core/login/login.service';
import { LoginForm } from '@app/core/login/login-form';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean;
  loginForm: LoginForm = new LoginForm();
  result: String;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  _login(): void {
    this.loginService.login(this.loginForm).subscribe(
      (response) => {
        localStorage.setItem('jwt_token', response.accessToken);
        this.loginService.loggedIn.next(true);
        this.router.navigate(['/home']);
      }, (error) => {
        this.loginService.loggedIn.next(false);
        console.log(this.loginService.isLoggedIn);
      }
      );
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.loginService.login(this.form.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }

}
