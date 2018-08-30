import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { HomeService } from './home.service';
import {PlayersService} from '../players/players.service';
import { Team } from '../team/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[];
  team: Team;
  dataSourceWorst: any;
  dataSourceBest: any;

  constructor(private homeService: HomeService, private playersService: PlayersService) { }

  ngOnInit() {
    this.initTeam();
    this.initWorst();
    this.initBest();
    this.displayedColumns = ['name', 'total'];
  }

  initTeam() {
    this.homeService.getTeam().subscribe(data => {
      this.team = data;
    });
  }

  initWorst() {
    this.homeService.getTheWorst().subscribe(data => {
      this.dataSourceWorst = new MatTableDataSource(data);
    });
  }

  initBest() {
    this.homeService.getTheBest().subscribe(data => {
      this.dataSourceBest = new MatTableDataSource(data);
    });
  }

  selectRow(row) {
    this.playersService.getPlayer(row.id);
  }
}
