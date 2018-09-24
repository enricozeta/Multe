import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@app/app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@app/theme/material.module';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

// main component
import { AppComponent } from './app.component';

// application component
import { HomeComponent } from './home/home.component';

import { MultaComponent } from './multa/multa.component';
import { MulteTypesComponent } from './multe-types/multe-types.component';

import { NewMulteTypeComponent } from './new-multe-type/new-multe-type.component';
import { NewPlayerComponent } from './new-player/new-player.component';

import { PlayersComponent } from './players/players.component';
/////
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StaffUserComponent } from './staff-user/staff-user.component';

import { ChartsModule } from 'ng2-charts';
import { TeamComponent } from './team/team.component';
import { TeamSettingsComponent } from './team-settings/team-settings.component';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    PlayersComponent,

    // MultaComponent,
    // MulteTypesComponent,

    // NewMulteTypeComponent,
    // NewPlayerComponent,

    // ProfileComponent,
    // PlayerComponent,
    // ChangePasswordComponent,
    // StaffUserComponent,
    // TeamComponent,
    // TeamSettingsComponent,
    // LoginComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,

    MaterialModule,

    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // ChartsModule

    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
