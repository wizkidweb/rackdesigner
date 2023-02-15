import { TestBed } from '@angular/core/testing';
import { Model } from './model';

import { ModelService } from './model.service';

type MockSchema = {
  foo: string,
}

describe('ModelService', () => {
  let service: ModelService<Model, MockSchema>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
