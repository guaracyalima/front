import { async, TestBed } from '@angular/core/testing';
import { ParametrizacaoUsuariosColaboradoresNovoComponent } from './parametrizacao-usuarios-colaboradores-novo.component';
describe('ParametrizacaoUsuariosColaboradoresNovoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParametrizacaoUsuariosColaboradoresNovoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ParametrizacaoUsuariosColaboradoresNovoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=parametrizacao-usuarios-colaboradores-novo.component.spec.js.map
