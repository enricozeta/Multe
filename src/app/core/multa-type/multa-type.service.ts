import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MultaType } from './multa-type';

import { environment } from '@env/environment';

@Injectable()

export class MultaTypeService {
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {}

  getMultaType(): Observable<MultaType[]> {
    const url = environment.baseUrl + '/multaType/all';
    return this.http.get<MultaType[]>(url);
  }

  goToNewMultaType(index: number) {
    this.router.navigate(['/new-multa-type'], { queryParams: { id: index } });
  }

  getMultaTypeById(id) {
    const url = environment.baseUrl + '/multaType';
    return this.http.get<MultaType>(url, {
      params: {
        id: this.activatedRoute.snapshot.queryParams['id'],
      },
    });
  }

  saveMultaType (multaType: MultaType): Observable<MultaType> {
    console.log('a');
    const url = environment.baseUrl + '/multaType';
    return this.http.post<MultaType>(url, multaType);
  }
}
