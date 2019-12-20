import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Transportadora } from 'src/app/shared/models/transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportatoraStoreService {

  private _transportadoras: BehaviorSubject<Transportadora[]> = new BehaviorSubject(null);
  transportadoras$ = this._transportadoras.asObservable();

  constructor() { }

  get transportadoras(): Transportadora[] {
    return this._transportadoras.value;
  }

  set transportadoras(newTransportadoras: Transportadora[]) {
    this._transportadoras.next(newTransportadoras);
  }

  removeTransportadora(transportadoraToRemove: Transportadora) {
    this._transportadoras.next(this._transportadoras.value.filter(transportadora => {
      return !(transportadora.id === transportadoraToRemove.id);
    }));
  }

  updateTransportadora(transportadoraToUpdate: Transportadora) {
    this._transportadoras.next(this._transportadoras.value.filter(transportadora => {
      return !(transportadora.id === transportadoraToUpdate.id);
    }));
    this._transportadoras.next([transportadoraToUpdate].concat(this._transportadoras.value));
  }
}
