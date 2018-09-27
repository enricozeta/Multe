import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { PlayersService } from './players.service';
import { Player } from '@app/core/player/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})

export class PlayersComponent implements OnInit {
  dataSource: MatTableDataSource<Player>;
  displayedColumns: string[];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private playerService: PlayersService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = ['name', 'multeNonPagate', 'multePagate'];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._initPlayers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  _initPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.dataSource = new MatTableDataSource<Player>(data);
    });
  }

  selectRow(row) {
    this.playerService.goToPlayer(row.id);
  }
}
