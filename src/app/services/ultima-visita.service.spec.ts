import { TestBed } from '@angular/core/testing';

import { UltimaVisitaService } from './ultima-visita.service';

describe('UltimaVisitaService', () => {
  let service: UltimaVisitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UltimaVisitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
