import { TestBed } from '@angular/core/testing';

import { BaresService } from './bares.service';

describe('BaresService', () => {
  let service: BaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
