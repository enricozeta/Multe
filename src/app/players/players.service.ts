import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../player/player';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayersService {

  constructor(private http: HttpClient, private router: Router) {}

  getPlayers(): Observable<Player[]> {
    const url = environment.baseUrl + '/player/all';
    return this.http.get<Player[]>(url);
  }

  getPlayer(index: number) {
    this.router.navigate(['/player'], { queryParams: { id: index } });
  }
}
