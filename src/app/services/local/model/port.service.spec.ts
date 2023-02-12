import { TestBed } from '@angular/core/testing';

import { LocalPortService } from './port.service';

describe('PortService', () => {
  let service: LocalPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
