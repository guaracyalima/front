import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoCanditadoPoliticoNovoComponent } from './parametrizacao-canditado-politico-novo.component';

describe('ParametrizacaoCanditadoPoliticoNovoComponent', () => {
  let component: ParametrizacaoCanditadoPoliticoNovoComponent;
  let fixture: ComponentFixture<ParametrizacaoCanditadoPoliticoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizacaoCanditadoPoliticoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrizacaoCanditadoPoliticoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
