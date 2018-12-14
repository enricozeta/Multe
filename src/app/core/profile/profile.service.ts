import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile';
import { environment } from '@env/environment';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<Profile> {
    const url = environment.baseUrl + '/user';
    return this.http.get<any>(url);
  }

  saveUser (user: Profile): Observable<Profile> {
    const url = environment.baseUrl + '/admin/user';
    return this.http.put<Profile>(url, user);
  }
}
