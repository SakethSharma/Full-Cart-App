import { TestBed } from '@angular/core/testing';

import { FullCartService } from './full-cart.service';

describe('FullCartService', () => {
  let service: FullCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
