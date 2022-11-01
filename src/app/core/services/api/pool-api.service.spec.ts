import { TestBed } from '@angular/core/testing';

import { PoolApiService } from './pool-api.service';

describe('PoolApiService', () => {
  let service: PoolApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
