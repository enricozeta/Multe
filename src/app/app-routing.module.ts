import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswordComponent } from './change-password/change-password.component';

import { HomeComponent } from './home/home.component';

import { MultaComponent } from './multa/multa.component';
import { MulteTypesComponent } from './multe-types/multe-types.component';

import { NewMulteTypeComponent } from './new-multe-type/new-multe-type.component';
import { NewPlayerComponent } from './new-player/new-player.component';

import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { ProfileComponent } from './profile/profile.component';

import { TeamSettingsComponent } from './team-settings/team-settings.component';

// import { StaffUserComponent } from './staff-user/staff-user.component';
// import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'change-password', component: ChangePasswordComponent },

  { path: 'home', component: HomeComponent },

  { path: 'multa', component: MultaComponent },
  { path: 'multe-types', component: MulteTypesComponent },

  { path: 'new-multaType', component: NewMulteTypeComponent },
  { path: 'new-player', component: NewPlayerComponent },

  { path: 'player', component: PlayerComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'team-settings', component: TeamSettingsComponent },

  // { path: 'staff-user', component: StaffUserComponent },
  // { path: 'team', component: TeamComponent },

  // default
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
