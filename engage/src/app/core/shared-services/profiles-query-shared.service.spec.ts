import { TestBed } from '@angular/core/testing';

import { ProfilesQuerySharedService } from './profiles-query-shared.service';

describe('ProfilesQuerySharedService', () => {
  let service: ProfilesQuerySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesQuerySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
