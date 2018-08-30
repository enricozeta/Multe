import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MultaType} from '../multe-types/multeType';
import {Multa} from './multa';
import { environment } from '../../environments/environment';
import { Player } from '../player/player';

@Injectable()
export class MultaService {

  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  multa: any;

  getMulteType(): Observable<MultaType[]> {
    const url = environment.baseUrl + '/multaType/all';
    return this.http.get<MultaType[]>(url);
  }

  saveMulta(multa: Multa) {
    const url = environment.baseUrl + '/multa';
    return this.http.post<Multa>(url, multa);
  }

  getMulta() {
    const url = environment.baseUrl + '/multa';
    if (this.router.queryParams.subscribe != null) {
      const index = this.router.snapshot.queryParams['id'];
      if (index != null) {
        return this.http.get<Multa>(url,
          {
            params: {
              id: index,
            }
          });
      }
      return this.multa;
    }
    return this.multa;
  }
}
