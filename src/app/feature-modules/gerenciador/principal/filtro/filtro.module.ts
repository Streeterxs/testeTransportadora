import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltroComponent } from './filtro.component';
import { PesquisaModule } from './pesquisa/pesquisa.module';
import { AtivosModule } from './ativos/ativos.module';

@NgModule({
  declarations: [FiltroComponent],
  imports: [
    CommonModule,
    PesquisaModule,
    AtivosModule
  ],
  exports: [FiltroComponent]
})
export class FiltroModule { }
