import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaBuscadorComponent } from './respuesta-buscador.component';

describe('RespuestaBuscadorComponent', () => {
  let component: RespuestaBuscadorComponent;
  let fixture: ComponentFixture<RespuestaBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespuestaBuscadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestaBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
