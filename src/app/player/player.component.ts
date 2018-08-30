import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Player } from '../player/player';
import { PLayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  displayedColumns: string[] = ['descrizione', 'data', 'pagata', 'valore'];
  dataSource: any;
  player: Player;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private playerService: PLayerService) { }

  ngOnInit() {
    this.onInitPlayer();
    this.dataSource = {
      paginator : this.paginator,
      sort : this.sort
    };
  }

  onInitPlayer() {
    this.playerService.getPlayer().subscribe(data => {
      this.player = data;
      this.dataSource = new MatTableDataSource(this.player.multe);
    });
  }

  selectRow(row) {
    this.playerService.getMulta(row.id);
  }
}
