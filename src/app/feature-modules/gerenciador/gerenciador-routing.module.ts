import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GerenciadorComponent } from './gerenciador.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciadorRoutingModule { }
