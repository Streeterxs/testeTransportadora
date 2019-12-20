import { TestBed } from '@angular/core/testing';

import { TransportatoraHttpService } from './transportatora-http.service';

describe('TransportatoraHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportatoraHttpService = TestBed.get(TransportatoraHttpService);
    expect(service).toBeTruthy();
  });
});
