import { TestBed } from '@angular/core/testing';

import { FindProspectsQuerySharedService } from './find-prospects-query-shared.service';

describe('FindProspectsQuerySharedService', () => {
  let service: FindProspectsQuerySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindProspectsQuerySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
