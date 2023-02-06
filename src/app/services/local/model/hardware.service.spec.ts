import { TestBed } from '@angular/core/testing';

import { LocalHardwareService } from './hardware.service';

describe('HardwareService', () => {
  let service: LocalHardwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalHardwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
