import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizarComponent } from './atualizar.component';
import { FormularioTransportadoraModule } from '../../../shared/components/formulario-transportadora/formulario-transportadora.module';

@NgModule({
  declarations: [
    AtualizarComponent
  ],
  imports: [
    CommonModule,
    FormularioTransportadoraModule
  ],
  exports: [
    AtualizarComponent
  ]
})
export class AtualizarModule { }
