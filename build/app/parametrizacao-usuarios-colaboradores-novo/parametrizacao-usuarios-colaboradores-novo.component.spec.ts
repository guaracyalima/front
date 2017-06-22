import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoUsuariosColaboradoresNovoComponent } from './parametrizacao-usuarios-colaboradores-novo.component';

describe('ParametrizacaoUsuariosColaboradoresNovoComponent', () => {
  let component: ParametrizacaoUsuariosColaboradoresNovoComponent;
  let fixture: ComponentFixture<ParametrizacaoUsuariosColaboradoresNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizacaoUsuariosColaboradoresNovoComponent ]
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
