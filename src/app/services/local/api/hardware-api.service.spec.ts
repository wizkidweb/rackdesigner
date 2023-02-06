import { TestBed } from '@angular/core/testing';

import { LocalHardwareApiService } from './hardware-api.service';

describe('HardwareApiService', () => {
  let service: LocalHardwareApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalHardwareApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
