import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoCanditadoPoliticoComponent } from './parametrizacao-canditado-politico.component';

describe('ParametrizacaoCanditadoPoliticoComponent', () => {
  let component: ParametrizacaoCanditadoPoliticoComponent;
  let fixture: ComponentFixture<ParametrizacaoCanditadoPoliticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizacaoCanditadoPoliticoComponent ]
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
