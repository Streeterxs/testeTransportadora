import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GerenciadorRoutingModule } from './gerenciador-routing.module';
import { GerenciadorComponent } from './gerenciador.component';
import { TransportatoraEndpointService } from './services/transportatora-endpoint.service';
import { TransportatoraFacadeService } from './services/transportatora-facade.service';
import { TransportatoraHttpService } from './services/transportatora-http.service';
import { TransportatoraStoreService } from './services/transportatora-store.service';

@NgModule({
  declarations: [
    GerenciadorComponent
  ],
  imports: [
    CommonModule,
    GerenciadorRoutingModule,
    HttpClientModule
  ],
  providers: [
    TransportatoraEndpointService,
    TransportatoraFacadeService,
    TransportatoraHttpService,
    TransportatoraStoreService
  ]
})
export class GerenciadorModule { }
