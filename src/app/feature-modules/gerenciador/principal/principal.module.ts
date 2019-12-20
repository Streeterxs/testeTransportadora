import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';
import { ListaModule } from './lista/lista.module';
import { FiltroModule } from './filtro/filtro.module';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ListaModule,
    FiltroModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PrincipalModule { }
