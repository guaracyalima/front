var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ParametrizacaoHierarquiaComponent } from './parametrizacao-hierarquia/parametrizacao-hierarquia.component';
import { ParametrizacaoTipoColaboradoresComponent } from './parametrizacao-tipo-colaboradores/parametrizacao-tipo-colaboradores.component';
import { ParametrizacaoUsuariosColaboradoresComponent } from './parametrizacao-usuarios-colaboradores/parametrizacao-usuarios-colaboradores.component';
import { ParametrizacaoCanditadoPoliticoComponent } from './parametrizacao-canditado-politico/parametrizacao-canditado-politico.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'parametrizacao/candidatos', component: ParametrizacaoCanditadoPoliticoComponent },
    { path: 'parametrizacao/colaboradores/usuarios', component: ParametrizacaoUsuariosColaboradoresComponent },
    { path: 'parametrizacao/colaboradores/tipos', component: ParametrizacaoTipoColaboradoresComponent },
    { path: 'parametrizacao/hierarquia', component: ParametrizacaoHierarquiaComponent },
    { path: '', children: [] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };

//# sourceMappingURL=app-routing.module.js.map
