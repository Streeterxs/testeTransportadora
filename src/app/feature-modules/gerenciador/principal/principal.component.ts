import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transportadora } from '../../../shared/models/transportadora';
import { TransportatoraFacadeService } from '../services/transportatora-facade.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  listaTransportadora: Transportadora[] = [];

  constructor(
    private _transportatoraFacadeService: TransportatoraFacadeService,
    private _router: Router
    ) { }

  ngOnInit() {
    this._transportatoraFacadeService.transportadorasObservable.subscribe(listaTransportadora => {
      this.listaTransportadora = listaTransportadora;
    });
  }

  redirectToUpdate(transportadoraId) {
    this._router.navigate(['atualizar', transportadoraId]);
  }

}
