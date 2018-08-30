import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {PlayersService} from './players.service';
import { Player } from '../player/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  displayedColumns: string[];
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.initPlayers();
    this.displayedColumns = ['name', 'multeNonPagate', 'multePagate'];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  initPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.dataSource = new MatTableDataSource<Player>(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectRow(row) {
    this.playerService.getPlayer(row.id);
  }
}
