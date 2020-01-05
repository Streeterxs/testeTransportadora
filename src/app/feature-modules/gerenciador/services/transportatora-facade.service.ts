import { Injectable } from '@angular/core';

import { TransportatoraHttpService } from './transportatora-http.service';
import { TransportatoraStoreService } from './transportatora-store.service';

@Injectable()
export class TransportatoraFacadeService {

  constructor(
    private _transportatoraHttpService: TransportatoraHttpService,
    private _transportatoraStoreService: TransportatoraStoreService
    ) { }

    get transportadoras() {
      if (!this._transportatoraStoreService.transportadoras) {
        this.loadTransportadoras();
      }
      return this._transportatoraStoreService.transportadoras;
    }

    get transportadorasObservable() {
      if (!this._transportatoraStoreService.transportadoras) {
        this.loadTransportadoras();
      }
      return this._transportatoraStoreService.transportadoras$;
    }

    loadTransportadoras() {
      this._transportatoraHttpService.getAllTransportadoras().subscribe(listTransportadoras => {
        this._transportatoraStoreService.transportadoras = listTransportadoras;
      });
    }
}
