import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    this.router.navigate(['/new-multaType'], { queryParams: { id: index } });
  }

  getMultaTypeById(id) {
    const url = environment.baseUrl + '/multaType';
    return this.http.get<MultaType>(url, {
      params: {
        id: this.activatedRoute.snapshot.queryParams['id'],
      },
    });
  }
}
