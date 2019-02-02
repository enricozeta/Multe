import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@app/theme/material.module';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// main component
import { AppComponent } from './app.component';

// application component
import { ChangePasswordComponent } from './components/change-password/change-password.component';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';

import { NewMultaComponent } from './components/new-multa/new-multa.component';
import { MultaTypesComponent } from './components/multa-types/multa-types.component';

import { NewMultaTypeComponent } from './components/new-multa-type/new-multa-type.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';

import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';

import { TeamSettingsComponent } from './components/team-settings/team-settings.component';

import { MAT_DATE_LOCALE } from '@angular/material';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { TokenInterceptor } from './components/login/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

export function tokenGetter() {
  return localStorage.getItem('jwt_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    HomeComponent,
    LoginComponent,
    NewMultaComponent,
    MultaTypesComponent,
    NewMultaTypeComponent,
    NewPlayerComponent,
    PlayerComponent,
    PlayersComponent,
    ProfileComponent,
    TeamSettingsComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['multe.herokuapp.com', 'localhost:28080'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
