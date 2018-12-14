import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from './player';

import { environment } from '@env/environment';

@Injectable()

export class PlayerService {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {}

  getPlayer(playerId: string) {
    const url = environment.baseUrl + '/player';
    return this.http.get<Player>(url, {
      params: {
        id: playerId,
      },
    });
  }

  goToMulta(index: number) {
    this.router.navigate(['/multa'], { queryParams: { id: index } });
  }

  savePlayer (player: Player): Observable<Player> {
    const url = environment.baseUrl + '/admin/player';
    return this.http.post<Player>(url, player);
  }

  deletePlayer(playerId: string): Observable<Boolean> {
    const url = environment.baseUrl + '/admin/player';
    return this.http.delete<Boolean>(url, {
      params: {
        id: playerId,
      },
    });
  }
}
