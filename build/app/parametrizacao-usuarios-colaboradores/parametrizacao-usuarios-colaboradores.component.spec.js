import { async, TestBed } from '@angular/core/testing';
import { ParametrizacaoUsuariosColaboradoresComponent } from './parametrizacao-usuarios-colaboradores.component';
describe('ParametrizacaoUsuariosColaboradoresComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParametrizacaoUsuariosColaboradoresComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ParametrizacaoUsuariosColaboradoresComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=parametrizacao-usuarios-colaboradores.component.spec.js.map
