import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatSelectModule,
  MatInputModule, MatTableModule, MatAutocompleteModule, MatCardModule, MatProgressBarModule, MatToolbarModule,
  MatIconModule, MatTreeModule, MatExpansionModule, MatPaginatorModule, MatGridListModule, MatDatepickerModule,
  MatNativeDateModule, MAT_DATE_LOCALE, MatProgressSpinnerModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayersComponent } from './players/players.component';
import { MultaComponent } from './multa/multa.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StaffUserComponent } from './staff-user/staff-user.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { MulteTypesComponent } from './multe-types/multe-types.component';
import { TeamComponent } from './team/team.component';
import { TeamSettingsComponent } from './team-settings/team-settings.component';
import {PlayersService} from './players/players.service';
import { HomeService } from './home/home.service';
import { MultaService } from './multa/multa.service';
import { MultaTypeService } from './multe-types/multaType.service';
import {TeamService} from './team/team.service';
import {ProfileService} from './profile/profile.service';
import {PLayerService} from './player/player.service';
import { NewMulteTypeComponent } from './new-multe-type/new-multe-type.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'staff-user', component: StaffUserComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'new-player', component: NewPlayerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'multa', component: MultaComponent },
  { path: 'multe-types', component: MulteTypesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team-settings', component: TeamSettingsComponent },
  { path: 'new-multaType', component: NewMulteTypeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NewPlayerComponent,
    PlayersComponent,
    MultaComponent,
    ProfileComponent,
    PlayerComponent,
    ChangePasswordComponent,
    StaffUserComponent,
    HomeComponent,
    MulteTypesComponent,
    TeamComponent,
    TeamSettingsComponent,
    NewMulteTypeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { onSameUrlNavigation: 'reload',
        enableTracing: false,
        useHash: true } // <-- debugging purposes only
    ),
  ],
  entryComponents: [AppComponent],
  providers: [
    PlayersService,
    HomeService,
    MultaService,
    MultaTypeService,
    TeamService,
    ProfileService,
    PLayerService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
