import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtivosComponent } from './ativos.component';

@NgModule({
  declarations: [AtivosComponent],
  imports: [
    CommonModule
  ],
  exports: [AtivosComponent]
})
export class AtivosModule { }
