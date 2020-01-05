import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioTransportadoraComponent } from './formulario-transportadora.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [FormularioTransportadoraComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  exports: [FormularioTransportadoraComponent]
})
export class FormularioTransportadoraModule { }
