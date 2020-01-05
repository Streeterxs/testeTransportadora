import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTransportadoraComponent } from './formulario-transportadora.component';

describe('FormularioTransportadoraComponent', () => {
  let component: FormularioTransportadoraComponent;
  let fixture: ComponentFixture<FormularioTransportadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTransportadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
