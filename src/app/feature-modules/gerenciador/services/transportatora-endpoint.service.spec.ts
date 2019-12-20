import { TestBed } from '@angular/core/testing';

import { TransportatoraEndpointService } from './transportatora-endpoint.service';

describe('TransportatoraEndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportatoraEndpointService = TestBed.get(TransportatoraEndpointService);
    expect(service).toBeTruthy();
  });
});
