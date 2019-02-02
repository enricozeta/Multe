import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { MultaTypesComponent } from './components/multa-types/multa-types.component';
import { NewMultaComponent } from './components/new-multa/new-multa.component';
import { NewMultaTypeComponent } from './components/new-multa-type/new-multa-type.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TeamSettingsComponent } from './components/team-settings/team-settings.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'home', component: HomeComponent},
  { path: 'multa-types', component: MultaTypesComponent },
  { path: 'new-multa', component: NewMultaComponent },
  { path: 'new-multa-type', component: NewMultaTypeComponent },
  { path: 'new-player', component: NewPlayerComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'team-settings', component: TeamSettingsComponent },
  { path: 'login', component: LoginComponent },

  // default
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
