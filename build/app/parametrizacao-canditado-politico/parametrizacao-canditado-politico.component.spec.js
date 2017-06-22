import { async, TestBed } from '@angular/core/testing';
import { ParametrizacaoCanditadoPoliticoComponent } from './parametrizacao-canditado-politico.component';
describe('ParametrizacaoCanditadoPoliticoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParametrizacaoCanditadoPoliticoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ParametrizacaoCanditadoPoliticoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=parametrizacao-canditado-politico.component.spec.js.map
