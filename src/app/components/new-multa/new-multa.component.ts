import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Multa } from '@app/core/multa/multa';
import { MultaService } from '@app/core/multa/multa.service';
import { MultaTypeService } from '@app/core/multa-type/multa-type.service';
import { MultaType } from '@app/core/multa-type/multa-type';

import { Player } from '@app/core/player/player';
import { PlayersService } from '@app/components/players/players.service';

@Component({
  selector: 'app-new-multa',
  templateUrl: './new-multa.component.html',
  styleUrls: ['./new-multa.component.scss'],
})
export class NewMultaComponent implements OnInit {
  form = new FormControl();
  title: string;
  players: Player[];
  multa: Multa = new Multa;
  multeType: MultaType[];
  multeTypeMap: Map<number, MultaType>;
  showDelete: Boolean = false;
  id: string;
  playersNotFound: Boolean;
  multeTypeNotFound: Boolean;

  constructor(private multaService: MultaService, private playerService: PlayersService, private multaTypeService: MultaTypeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.playersNotFound = false;
    this.multeTypeNotFound = false;
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    this._initMulteType();
    this._initPlayers();
    this._onInitMulta();
  }

  _onInitMulta() {
    if (this.id !== undefined) {
      this.title = 'Modifica multa';
      this.showDelete = true;
      this.multaService.getMulta(this.id).subscribe(data => {
        this.multa = data;
        this.multa.data = new Date(this.multa.data);
      });
    } else {
      this.multa.data = new Date();
      this.title = 'Nuova multa';
    }
  }

  _initMulteType() {
    this.multaService.getMulteType().subscribe(data => {
      this.multeType = data;
      this.multeTypeMap = new Map<number, MultaType>(
        data.map(x => [x.id, x] as [number, MultaType])
      );
      if (data.length === 0) {
        this.multeTypeNotFound = true;
      }
    });
  }

  _initPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data;
      if (data.length === 0) {
        this.playersNotFound = true;
      }
    });
  }

  addMulta(): void {
      this.multaService.saveMulta(this.multa).subscribe(result => {
        this.playerService.goToPlayer(result.playerId);
    });
  }

  changeType(): void {
    const res = this.multeTypeMap.get(this.multa.multeTypeId);
    this.multa.valore = res.valore;
    this.multa.descrizione = res.descrizione;
  }

  deleteMulta(): void {
    this.multaService.deleteMultaById(this.id).subscribe(data => {
      this.playerService.goToPlayer(this.multa.playerId);
    });
  }

}
