import { TestBed } from '@angular/core/testing';

import { TransportatoraFacadeService } from './transportatora-facade.service';

describe('TransportatoraFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportatoraFacadeService = TestBed.get(TransportatoraFacadeService);
    expect(service).toBeTruthy();
  });
});
