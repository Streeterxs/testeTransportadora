import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa.component';

@NgModule({
  declarations: [PesquisaComponent],
  imports: [
    CommonModule
  ],
  exports: [PesquisaComponent]
})
export class PesquisaModule { }
