import { TestBed } from '@angular/core/testing';

import { LocalUserService } from './user.service';

describe('UserService', () => {
  let service: LocalUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
