import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { HomeService } from '@app/components/home/home.service';

import { MultaService } from '@app/core/multa/multa.service';
import { MultaTypeService } from '@app/core/multa-type/multa-type.service';

import { PlayerService } from '@app/core/player/player.service';
import { PlayersService } from '@app/components/players/players.service';
import { ProfileService } from '@app/components/profile/profile.service';

import { TeamService } from '@app/core/team/team.service';

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
    ProfileService,
    TeamService
  ]
})
export class CoreModule { }
