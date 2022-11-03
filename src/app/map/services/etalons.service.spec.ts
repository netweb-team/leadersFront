import { TestBed } from '@angular/core/testing';

import { EtalonsService } from './etalons.service';

describe('EtalonsService', () => {
  let service: EtalonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtalonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
