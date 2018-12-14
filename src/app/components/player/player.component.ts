import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '@app/core/player/player';
import { PlayerService } from '@app/core/player/player.service';
import { Multa } from '@app/core/multa/multa';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})

export class PlayerComponent implements OnInit {
  dataSource: MatTableDataSource<Multa>;
  displayedColumns: string[];
  player: Player;
  id: string;
  multe: Multa[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.player = new Player();
    this._onInitPlayer();
    this.displayedColumns = ['descrizione', 'data', 'pagata', 'valore'];
  }

  selectRow(row) {
    this.playerService.goToMulta(row.id);
    this.router.navigate(['/new-multa'], { queryParams: { id: row.id } });
  }

  _onInitPlayer() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    this.playerService.getPlayer(this.id).subscribe(data => {
      this.player = data;
      this.multe = data.multe;
      this.multe.sort(function(a, b) {
        return +new Date(b.data) - +new Date(a.data);
      });
      this.dataSource = new MatTableDataSource(this.player.multe);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
