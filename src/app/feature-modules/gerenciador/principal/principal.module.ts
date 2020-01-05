import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    FiltroModule,
    RouterModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PrincipalModule { }
