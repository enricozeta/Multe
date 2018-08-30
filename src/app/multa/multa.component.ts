import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MultaService} from './multa.service';
import {Multa} from './multa';
import {MultaType} from '../multe-types/multeType';
import {Player} from '../player/player';
import {PlayersService} from '../players/players.service';

@Component({
  selector: 'app-multa',
  templateUrl: './multa.component.html',
  styleUrls: ['./multa.component.scss']
})


export class MultaComponent implements OnInit {
  myControl = new FormControl();
  players: any[];
  nameOfplayers: Player[];
  multeType: MultaType[];
  multa: Multa;
  selectedValue: number;
  filteredOptions: Observable<Player[]>;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor(private multaService: MultaService, private playerService: PlayersService) { }

  ngOnInit() {
    this.nameOfplayers = [];
    this.onInitPlayers();
    this.onInitMulteType();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Player>(''),
        map(value => typeof value === 'string' ? value : value.displayName),
        map(displayName => displayName ? this._filter(displayName) : this.nameOfplayers)
      );
  }

  displayFn(player?: Player): string | undefined {
    return player ? player.displayName : undefined;
  }

  private _filter(displayName: string): Player[] {
    const filterValue = displayName.toLowerCase();
    return this.nameOfplayers.filter(nameOfplayer => nameOfplayer.displayName.toLowerCase().indexOf(filterValue) === 0);
  }

  onInitMulteType() {
    this.multaService.getMulteType().subscribe(data => {
      this.multeType = data;
    });
  }

  onInitPlayers() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data;
      this.players.forEach(item => {
        const player = {
          id: item.id,
          displayName: item.name + ' ' + item.surname,
          multe: item.multe,
        };
        this.nameOfplayers.push(player);
      });
    });
  }

  onInitMulta() {
    this.multaService.getMulta().subscribe(data => {
      this.multa = data;
    });
  }

}
