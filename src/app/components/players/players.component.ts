import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Player } from '@app/core/player/player';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})

export class PlayersComponent implements OnInit {
  visible: Boolean;
  dataSource: MatTableDataSource<Player>;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private playerService: PlayersService) {}

  ngOnInit() {
    this.visible = true;
    this._initPlayers();
    this.displayedColumns = ['name', 'multeNonPagate', 'multePagate'];

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  _initPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.sort(function(a, b) {
        return a.surname.localeCompare(b.surname);
      }));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (data.length === 0) {
        this.visible = false;
      }
    });
  }

  selectRow(row) {
    this.playerService.goToPlayer(row.id);
  }
}
