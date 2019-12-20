import { TestBed } from '@angular/core/testing';

import { TransportatoraStoreService } from './transportatora-store.service';

describe('TransportatoraStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransportatoraStoreService = TestBed.get(TransportatoraStoreService);
    expect(service).toBeTruthy();
  });
});
