import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoTipoColaboradoresNovoComponent } from './parametrizacao-tipo-colaboradores-novo.component';

describe('ParametrizacaoTipoColaboradoresNovoComponent', () => {
  let component: ParametrizacaoTipoColaboradoresNovoComponent;
  let fixture: ComponentFixture<ParametrizacaoTipoColaboradoresNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizacaoTipoColaboradoresNovoComponent ]
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
