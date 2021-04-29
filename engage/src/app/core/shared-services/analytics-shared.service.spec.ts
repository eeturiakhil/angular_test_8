import { TestBed } from '@angular/core/testing';

import { AnalyticsSharedService } from './analytics-shared.service';

describe('AnalyticsSharedService', () => {
  let service: AnalyticsSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
