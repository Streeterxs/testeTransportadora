import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Transportadora } from '../../../shared/models/transportadora';

const API_URL = 'http://localhost:3000';
@Injectable()
export class TransportatoraHttpService {

  constructor(private _http: HttpClient) { }

  getAllTransportadoras(): Observable<Transportadora> {
    return this._http.get<Transportadora>(API_URL + '/transportadoras/');
  }
}
