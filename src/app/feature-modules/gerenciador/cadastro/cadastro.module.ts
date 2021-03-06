import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './cadastro.component';
import { FormularioTransportadoraModule } from '../../../shared/components/formulario-transportadora/formulario-transportadora.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormularioTransportadoraModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
