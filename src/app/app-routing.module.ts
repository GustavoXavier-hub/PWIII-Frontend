import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { NovoPessoaComponent } from './novo-pessoa/novo-pessoa.component';

const routes: Routes = [
  {path: 'listagem', component: ListaPessoaComponent},
  {path: 'novo', component: NovoPessoaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
