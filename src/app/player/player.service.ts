import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../player/player';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class PLayerService {

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {}

  getPlayer() {
    const url = environment.baseUrl + '/player';
    return this.http.get<Player>(url,
      {
        params: {
          id: this.activatedRoute.snapshot.queryParams['id'],
        }
      });
  }

  getMulta(index: number) {
    this.router.navigate(['/multa'], { queryParams: { id: index } });
  }
}
