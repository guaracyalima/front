import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizacaoHierarquiaComponent } from './parametrizacao-hierarquia.component';

describe('ParametrizacaoHierarquiaComponent', () => {
  let component: ParametrizacaoHierarquiaComponent;
  let fixture: ComponentFixture<ParametrizacaoHierarquiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizacaoHierarquiaComponent ]
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
