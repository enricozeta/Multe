import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

import { Player } from '@app/core/player/player';
import { PlayerService } from '@app/core/player/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[];
  player: Player;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit() {
    this.dataSource = {
      paginator: this.paginator,
      sort: this.sort,
    };

    this.displayedColumns = ['descrizione', 'data', 'pagata', 'valore'];

    this._onInitPlayer();
  }

  selectRow(row) {
    this.playerService.goToMulta(row.id);
    this.router.navigate(['/multa'], { queryParams: { id: row.id } });
  }

  _onInitPlayer() {
    this.playerService.getPlayer().subscribe(data => {
      this.player = data;
      this.dataSource = new MatTableDataSource(this.player.multe);
    });
  }
}
