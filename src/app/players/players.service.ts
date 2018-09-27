import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import { Player } from '@app/core/player/player';

@Injectable()
export class PlayersService {
  constructor(private http: HttpClient, private router: Router) {}

  getPlayers(): Observable<Player[]> {
    const url = environment.baseUrl + '/player/all';
    return this.http.get<Player[]>(url);
  }

  goToPlayer(index: number) {
    this.router.navigate(['/player'], { queryParams: { id: index } });
  }
}
