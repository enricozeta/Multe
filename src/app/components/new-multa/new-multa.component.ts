import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { MultaService } from '@app/core/multa/multa.service';
import { MultaType } from '@app/core/multa-type/multa-type';

import { Player } from '@app/core/player/player';
import { PlayersService } from '@app/components/players/players.service';

@Component({
  selector: 'app-new-multa',
  templateUrl: './new-multa.component.html',
  styleUrls: ['./new-multa.component.scss'],
})
export class NewMultaComponent implements OnInit {
  filteredOptions: Observable<Player[]>;
  form = new FormControl();
  players: Player[];

  multeType: MultaType[];
  multeTypeSelected: number;

  constructor(private multaService: MultaService, private playerService: PlayersService) {}

  ngOnInit() {
    this.players = [];

    this._initFilters();
    this._initMulteType();
    this._initPlayers();
  }

  displayFn(player?: Player): string | undefined {
    return player ? `${player.name} ${player.surname}` : undefined;
  }

  _filter(value: string | Player): Player[] {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return this.players.filter(e => e.name.toLowerCase().includes(filterValue) || e.surname.toLowerCase().includes(filterValue));
    }

    return this.players.filter(e => e === value);
  }

  _initFilters() {
    this.filteredOptions = this.form.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  _initMulteType() {
    this.multaService.getMulteType().subscribe(data => {
      this.multeType = data;
    });
  }

  _initPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data;
    });
  }
}
