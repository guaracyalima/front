import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoTipoColaboradoresComponent } from './parametrizacao-tipo-colaboradores.component';

describe('ParametrizacaoTipoColaboradoresComponent', () => {
  let component: ParametrizacaoTipoColaboradoresComponent;
  let fixture: ComponentFixture<ParametrizacaoTipoColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizacaoTipoColaboradoresComponent ]
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
