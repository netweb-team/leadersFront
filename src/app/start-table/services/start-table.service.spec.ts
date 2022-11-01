import { TestBed } from '@angular/core/testing';

import { StartTableService } from './start-table.service';

describe('StartTableService', () => {
  let service: StartTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
