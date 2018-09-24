import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { HomeService } from '@app/home/home.service';

import { MultaService } from '@app/multa/multa.service';
import { MultaTypeService } from '@app/multe-types/multaType.service';

import { PlayerService } from '@app/player/player.service';
import { PlayersService } from '@app/players/players.service';
import { ProfileService } from '@app/profile/profile.service';

import { TeamService } from '@app/team/team.service';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule
  ],
  declarations: [],
  providers: [
    HomeService,
    MultaService,
    MultaTypeService,
    PlayerService,
    PlayersService,
    ProfileService
  ]
})
export class CoreModule { }
