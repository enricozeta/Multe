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
import { ChangePasswordComponent } from './change-password/change-password.component';

import { HomeComponent } from './home/home.component';

import { MultaComponent } from './multa/multa.component';
import { MulteTypesComponent } from './multe-types/multe-types.component';

import { NewMulteTypeComponent } from './new-multe-type/new-multe-type.component';
import { NewPlayerComponent } from './new-player/new-player.component';

import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { ProfileComponent } from './profile/profile.component';

import { StaffUserComponent } from './staff-user/staff-user.component';

import { TeamComponent } from './team/team.component';
import { TeamSettingsComponent } from './team-settings/team-settings.component';

import { MAT_DATE_LOCALE } from '@angular/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    ChangePasswordComponent,

    HomeComponent,

    MultaComponent,
    MulteTypesComponent,

    NewMulteTypeComponent,
    NewPlayerComponent,

    PlayerComponent,
    PlayersComponent,
    ProfileComponent,

    StaffUserComponent,

    TeamComponent,
    TeamSettingsComponent,
    // LoginComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,

    MaterialModule,

    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    CoreModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
