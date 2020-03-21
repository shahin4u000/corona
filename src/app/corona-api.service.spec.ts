import { TestBed } from '@angular/core/testing';

import { CoronaApiService } from './corona-api.service';

describe('CoronaApiService', () => {
  let service: CoronaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
