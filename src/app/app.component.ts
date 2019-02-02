import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '@app/core/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnDestroy, OnInit {
  panelOpenState = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  isLoggedIn$: Observable<boolean>;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public http: HttpClient, private loginService: LoginService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');

    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    console.log(this.isLoggedIn$);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  _logOut() {
    this.loginService.logout();
  }
}
