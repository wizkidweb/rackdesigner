import { TestBed } from '@angular/core/testing';

import { LocalUserApiService } from './user-api.service';

describe('UserApiService', () => {
  let service: LocalUserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
