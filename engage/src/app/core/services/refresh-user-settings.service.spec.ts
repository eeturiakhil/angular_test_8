import { TestBed } from '@angular/core/testing';

import { RefreshUserSettingsService } from './refresh-user-settings.service';

describe('RefreshUserSettingsService', () => {
  let service: RefreshUserSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshUserSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
