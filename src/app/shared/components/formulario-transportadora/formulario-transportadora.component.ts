import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Modal } from '../../enums/modal.enum';
import { Estados } from '../../enums/estados.enum';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Transportadora } from '../../models/transportadora';

@Component({
  selector: 'app-formulario-transportadora',
  templateUrl: './formulario-transportadora.component.html',
  styleUrls: ['./formulario-transportadora.component.scss']
})
export class FormularioTransportadoraComponent implements OnInit {

  formularioTransportadora: FormGroup;
  multiselectModal: any[];
  multiselectUf: any[];
  dropdownSettings: IDropdownSettings = {};

  @Output() formularioEventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.formularioTransportadora = this.creationTransportadoraForm();
    this.multiselectModal = this.returnObjectFromEnum(Modal);
    this.multiselectUf = this.returnObjectFromEnum(Estados);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  creationTransportadoraForm(): FormGroup {
    return this._fb.group({
      id: null,
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      empresa: ['', [Validators.required, Validators.minLength(4)]],
      telefone: ['', [Validators.required]],
      modal: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]]
    });
  }

  returnObjectFromEnum(enumToArray) {
    return Object.keys(enumToArray).filter(value => !!+value || +value === 0).map(key => ({item_id: key, item_text: enumToArray[key]}));
  }

  submit() {
    console.log('entrou aqui');
    if (this.formularioTransportadora.valid) {
      this.formularioEventEmitter.emit(this.formularioTransportadora.value);
    }
  }

  fulfillForm(transportadora: Transportadora) {
    this.formularioTransportadora.setValue(transportadora);
  }

}
