import { Component, OnInit } from '@angular/core';
import { Team } from '@app/core/team/team';

import { HomeService } from './home.service';
import { PlayersService } from '@app/components/players/players.service';
import { Player } from '@app/core/player/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  visible: Boolean;
  topPlayers: Player[];
  worstPlayers: Player[];
  ready: boolean;
  team: Team;

  constructor(private homeService: HomeService, private playersService: PlayersService) { }

  ngOnInit() {
    this.visible = true;
    this._initBest();
    this._initTeam();
    this._initWorst();
  }

  _initBest() {
    this.homeService.getTheBest().subscribe(data => {
      this.topPlayers = data;
      if (this.topPlayers.length === 0) {
        this.visible = false;
      }
    });
  }

  _initTeam() {
    this.homeService.getTeam().subscribe(data => {
      this.team = data;
      this.ready = true;
    });
  }

  _initWorst() {
    this.homeService.getTheWorst().subscribe(data => {
      this.worstPlayers = data;
    });
  }

  selectRow(row) {
    this.playersService.goToPlayer(row.id);
  }

}
