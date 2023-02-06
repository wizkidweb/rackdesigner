import { TestBed } from '@angular/core/testing';

import { LocalRackApiService } from './rack-api.service';

describe('RackApiService', () => {
  let service: LocalRackApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalRackApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
