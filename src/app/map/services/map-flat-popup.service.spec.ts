import { TestBed } from '@angular/core/testing';

import { MapFlatPopupService } from './map-flat-popup.service';

describe('MapFlatPopupServiceService', () => {
  let service: MapFlatPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapFlatPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
