import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from './team';

import { environment } from '@env/environment';

@Injectable()

export class TeamService {
  constructor(private http: HttpClient) {}

  getTeam(): Observable<Team> {
    const url = environment.baseUrl + '/team';
    return this.http.get<Team>(url);
  }
}
