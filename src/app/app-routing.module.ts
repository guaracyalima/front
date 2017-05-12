import { ParametrizacaoHierarquiaComponent } from './parametrizacao-hierarquia/parametrizacao-hierarquia.component';
import { ParametrizacaoTipoColaboradoresComponent } from './parametrizacao-tipo-colaboradores/parametrizacao-tipo-colaboradores.component';
import { ParametrizacaoUsuariosColaboradoresComponent } from './parametrizacao-usuarios-colaboradores/parametrizacao-usuarios-colaboradores.component';
import { ParametrizacaoCanditadoPoliticoComponent } from './parametrizacao-canditado-politico/parametrizacao-canditado-politico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'parametrizacao/candidatos', component: ParametrizacaoCanditadoPoliticoComponent },
  { path: 'parametrizacao/colaboradores/usuarios', component: ParametrizacaoUsuariosColaboradoresComponent },
  { path: 'parametrizacao/colaboradores/tipos', component: ParametrizacaoTipoColaboradoresComponent },
  { path: 'parametrizacao/hierarquia', component: ParametrizacaoHierarquiaComponent },
  { path: '',  children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
