import { async, TestBed } from '@angular/core/testing';
import { ParametrizacaoTipoColaboradoresNovoComponent } from './parametrizacao-tipo-colaboradores-novo.component';
describe('ParametrizacaoTipoColaboradoresNovoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParametrizacaoTipoColaboradoresNovoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ParametrizacaoTipoColaboradoresNovoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=parametrizacao-tipo-colaboradores-novo.component.spec.js.map
