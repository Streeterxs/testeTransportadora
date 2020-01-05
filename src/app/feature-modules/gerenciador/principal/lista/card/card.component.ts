import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Transportadora } from '../../../../../shared/models/transportadora';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() transportadora: Transportadora;

  @Output() emitTitleClick: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  titleClick() {
    this.emitTitleClick.emit(this.transportadora.id);
  }
}
