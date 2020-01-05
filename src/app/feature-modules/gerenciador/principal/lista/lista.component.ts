import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Transportadora } from '../../../../shared/models/transportadora';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() listaTransportadora: Transportadora[] = [];
 
  @Output() emitClickFromCard: EventEmitter<number> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
