import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormularioTransportadoraComponent } from '../../../shared/components/formulario-transportadora/formulario-transportadora.component';
import { TransportatoraFacadeService } from '../services/transportatora-facade.service';
import { Transportadora } from 'src/app/shared/models/transportadora';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.scss']
})
export class AtualizarComponent implements OnInit, AfterViewInit {

  @ViewChild(FormularioTransportadoraComponent, {static: false}) formularioTransportadora: FormularioTransportadoraComponent;


  constructor(
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private _transportadoraFacade: TransportatoraFacadeService
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.fillForm(this._transportadoraFacade.transportadoras.find(transportadora => transportadora.id === +params.id));
    });
    this.cd.detectChanges();
  }

  submittion() {
    this.formularioTransportadora.submit();
  }

  formSubmitted(event) {
    console.log(event);
  }

  fillForm(transportadora: Transportadora) {
    this.formularioTransportadora.fulfillForm(transportadora);
  }
}
