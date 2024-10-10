import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminaCompraComponent } from './termina-compra.component';

describe('TerminaCompraComponent', () => {
  let component: TerminaCompraComponent;
  let fixture: ComponentFixture<TerminaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminaCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
