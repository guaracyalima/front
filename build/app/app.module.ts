import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParametrizacaoCanditadoPoliticoComponent } from './parametrizacao-canditado-politico/parametrizacao-canditado-politico.component';
import { ParametrizacaoUsuariosColaboradoresComponent } from './parametrizacao-usuarios-colaboradores/parametrizacao-usuarios-colaboradores.component';
import { ParametrizacaoTipoColaboradoresComponent } from './parametrizacao-tipo-colaboradores/parametrizacao-tipo-colaboradores.component';
import { ParametrizacaoHierarquiaComponent } from './parametrizacao-hierarquia/parametrizacao-hierarquia.component';
import { ParametrizacaoUsuariosColaboradoresNovoComponent } from './parametrizacao-usuarios-colaboradores-novo/parametrizacao-usuarios-colaboradores-novo.component';
import { ParametrizacaoCanditadoPoliticoNovoComponent } from './parametrizacao-canditado-politico-novo/parametrizacao-canditado-politico-novo.component';
import { ParametrizacaoHierarquiaNovoComponent } from './parametrizacao-hierarquia-novo/parametrizacao-hierarquia-novo.component';
import { ParametrizacaoTipoColaboradoresNovoComponent } from './parametrizacao-tipo-colaboradores-novo/parametrizacao-tipo-colaboradores-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametrizacaoCanditadoPoliticoComponent,
    ParametrizacaoUsuariosColaboradoresComponent,
    ParametrizacaoTipoColaboradoresComponent,
    ParametrizacaoHierarquiaComponent,
    ParametrizacaoUsuariosColaboradoresNovoComponent,
    ParametrizacaoCanditadoPoliticoNovoComponent,
    ParametrizacaoHierarquiaNovoComponent,
    ParametrizacaoTipoColaboradoresNovoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
