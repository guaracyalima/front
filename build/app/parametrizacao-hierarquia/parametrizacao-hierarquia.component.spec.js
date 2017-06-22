import { async, TestBed } from '@angular/core/testing';
import { ParametrizacaoHierarquiaComponent } from './parametrizacao-hierarquia.component';
describe('ParametrizacaoHierarquiaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParametrizacaoHierarquiaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ParametrizacaoHierarquiaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

//# sourceMappingURL=parametrizacao-hierarquia.component.spec.js.map
