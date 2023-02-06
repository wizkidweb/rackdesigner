import { TestBed } from '@angular/core/testing';

import { LocalRackService } from './rack.service';

describe('RackService', () => {
  let service: LocalRackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalRackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
