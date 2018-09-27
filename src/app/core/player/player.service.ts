import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from './player';

import { environment } from '@env/environment';

@Injectable()

export class PlayerService {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {}

  getPlayer() {
    const url = environment.baseUrl + '/player';
    return this.http.get<Player>(url, {
      params: {
        id: this.activatedRoute.snapshot.queryParams['id'],
      },
    });
  }

  goToMulta(index: number) {
    this.router.navigate(['/multa'], { queryParams: { id: index } });
  }
}
