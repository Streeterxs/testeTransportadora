import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaComponent } from './lista.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [ListaComponent]
})
export class ListaModule { }
