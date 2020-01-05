import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GerenciadorComponent } from './gerenciador.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routes: Routes = [
  {
    path: '',
    component: GerenciadorComponent,
    children: [
      {
        path: 'principal',
        component: PrincipalComponent
      },
      {
        path: 'cadastrar',
        component: CadastroComponent
      },
      {
        path: 'atualizar/:id',
        component: AtualizarComponent
      },
      {
        path: '',
        redirectTo: 'principal'
      },
      {
        path: '**',
        redirectTo: 'principal'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciadorRoutingModule { }
