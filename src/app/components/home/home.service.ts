import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  getTeam(): Observable<any> {
    const url = environment.baseUrl + '/team';
    return this.http.get<any>(url);
  }

  getTheWorst(): Observable<any> {
    const url = environment.baseUrl + '/team/worst';
    return this.http.get<any>(url);
  }

  getTheBest(): Observable<any> {
    const url =  environment.baseUrl + '/team/best';
    return this.http.get<any>(url);
  }

}
