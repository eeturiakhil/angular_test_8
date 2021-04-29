import { TestBed } from '@angular/core/testing';

import { GlobalSearchSharedService } from './global-search-shared.service';

describe('GlobalSearchSharedService', () => {
  let service: GlobalSearchSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSearchSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
