import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { GerenciadorComponent } from './gerenciador.component';

import { GerenciadorRoutingModule } from './gerenciador-routing.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { PrincipalModule } from './principal/principal.module';
import { AtualizarModule } from './atualizar/atualizar.module';

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
    HttpClientModule,
    PrincipalModule,
    CadastroModule,
    AtualizarModule,
    RouterModule
  ],
  providers: [
    TransportatoraEndpointService,
    TransportatoraFacadeService,
    TransportatoraHttpService,
    TransportatoraStoreService
  ],
  exports: [
    GerenciadorComponent
  ]
})
export class GerenciadorModule { }
