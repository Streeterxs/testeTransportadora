import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { FormularioTransportadoraComponent } from '../../../shared/components/formulario-transportadora/formulario-transportadora.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChild(FormularioTransportadoraComponent, {static: false}) formularioTransportadora: FormularioTransportadoraComponent;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  submittion() {
    this.formularioTransportadora.submit();
  }

  formSubmitted(event) {
    console.log(event);
  }

}
