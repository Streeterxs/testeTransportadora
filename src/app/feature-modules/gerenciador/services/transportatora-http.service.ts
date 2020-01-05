import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Transportadora } from '../../../shared/models/transportadora';

const API_URL = 'http://localhost:3000';
@Injectable()
export class TransportatoraHttpService {

  listAllTransportadora: Transportadora[] = [
      {
      id: 1,
      email: 'eduardo@email.com',
      nome: 'string',
      empresa: 'string',
      telefone: 'string',
      modal: 0,
      cep: 'string',
      rua: 'string',
      numero: 92,
      bairro: 'string',
      cidade: 'string',
      uf: 10
    },
      {
      id: 2,
      email: 'eduardo@email.com',
      nome: 'string',
      empresa: 'string',
      telefone: 'string',
      modal: 0,
      cep: 'string',
      rua: 'string',
      numero: 92,
      bairro: 'string',
      cidade: 'string',
      uf: 10
    },
      {
      id: 3,
      email: 'eduardo@email.com',
      nome: 'string',
      empresa: 'string',
      telefone: 'string',
      modal: 0,
      cep: 'string',
      rua: 'string',
      numero: 92,
      bairro: 'string',
      cidade: 'string',
      uf: 10
    },
      {
      id: 4,
      email: 'eduardo@email.com',
      nome: 'string',
      empresa: 'string',
      telefone: 'string',
      modal: 0,
      cep: 'string',
      rua: 'string',
      numero: 92,
      bairro: 'string',
      cidade: 'string',
      uf: 10
    },
  ];
  constructor(private _http: HttpClient) { }

  getAllTransportadoras(): Observable<Transportadora[]> {
    // return this._http.get<Transportadora>(API_URL + '/transportadoras/');
    return of(this.listAllTransportadora);
  }
}
