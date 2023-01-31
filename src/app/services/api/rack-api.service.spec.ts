import { TestBed } from '@angular/core/testing';

import { RackApiService } from './rack-api.service';

describe('RackApiService', () => {
  let service: RackApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RackApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
