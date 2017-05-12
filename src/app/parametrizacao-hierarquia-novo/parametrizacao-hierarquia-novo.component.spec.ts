import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoHierarquiaNovoComponent } from './parametrizacao-hierarquia-novo.component';

describe('ParametrizacaoHierarquiaNovoComponent', () => {
  let component: ParametrizacaoHierarquiaNovoComponent;
  let fixture: ComponentFixture<ParametrizacaoHierarquiaNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizacaoHierarquiaNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrizacaoHierarquiaNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
