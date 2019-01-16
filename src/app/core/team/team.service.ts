import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Team } from './team';
import { StaffUser } from '../staff-user/staff-user';

import { environment } from '@env/environment';

@Injectable()

export class TeamService {
  constructor(private http: HttpClient) {}

  getTeam(): Observable<Team> {
    const url = environment.baseUrl + '/team';
    return this.http.get<Team>(url);
  }

  saveTeam(team: Team): Observable<Boolean> {
    const url = environment.baseUrl + '/admin/team';
    return this.http.post<Boolean>(url, team);
  }

  saveStaffUser(staffUser: StaffUser) {
    const url = environment.baseUrl + '/admin/staffUser';
    return this.http.post<StaffUser>(url, staffUser);
  }

  getStaffUser(): Observable<StaffUser> {
    const url = environment.baseUrl + '/staffUser';
    return this.http.get<StaffUser>(url);
  }

}
