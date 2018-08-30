import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MultaType} from '../multe-types/multeType';
import { environment } from '../../environments/environment';

@Injectable()
export class MultaTypeService {

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {}

  getMulteType(): Observable<MultaType[]> {
    const url = environment.baseUrl + '/multaType/all';
    return this.http.get<MultaType[]>(url);
  }

  getMultaType(index: number) {
    this.router.navigate(['/new-multaType'], { queryParams: { id: index } });
  }

  getMultaTypeById() {
    const url = environment.baseUrl + '/multaType';
    return this.http.get<MultaType>(url,
      {
        params: {
          id: this.activatedRoute.snapshot.queryParams['id'],
        }
      });
  }
}
