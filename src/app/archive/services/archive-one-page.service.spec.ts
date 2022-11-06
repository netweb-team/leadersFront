import { TestBed } from '@angular/core/testing';

import { ArchiveOnePageService } from './archive-one-page.service';

describe('ArchiveOnePageService', () => {
  let service: ArchiveOnePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiveOnePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
