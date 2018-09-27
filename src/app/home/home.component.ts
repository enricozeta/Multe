import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { MatTableDataSource } from '@angular/material';
import { PlayersService } from '@app/players/players.service';
import { Team } from '@app/team/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dataSourceBest: any;
  dataSourceWorst: any;
  displayedColumns: string[];
  ready: boolean;
  team: Team;

  constructor(private homeService: HomeService, private playersService: PlayersService) { }

  ngOnInit() {
    this._initBest();
    this._initTeam();
    this._initWorst();

    this.displayedColumns = ['name', 'total'];
  }

  _initBest() {
    this.homeService.getTheBest().subscribe(data => {
      this.dataSourceBest = new MatTableDataSource(data);
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
      this.dataSourceWorst = new MatTableDataSource(data);
    });
  }

  selectRow(row) {
    this.playersService.goToPlayer(row.id);
  }
}
