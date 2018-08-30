import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    const url = environment.baseUrl + '/user';
    return this.http.get<any>(url);
  }

}
