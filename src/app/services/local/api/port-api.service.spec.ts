import { TestBed } from '@angular/core/testing';

import { LocalPortApiService } from './port-api.service';

describe('PortApiService', () => {
  let service: LocalPortApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalPortApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
