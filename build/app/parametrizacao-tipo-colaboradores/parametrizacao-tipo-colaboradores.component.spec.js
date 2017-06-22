import { async, TestBed } from '@angular/core/testing';
import { ParametrizacaoTipoColaboradoresComponent } from './parametrizacao-tipo-colaboradores.component';
describe('ParametrizacaoTipoColaboradoresComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParametrizacaoTipoColaboradoresComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ParametrizacaoTipoColaboradoresComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=parametrizacao-tipo-colaboradores.component.spec.js.map
