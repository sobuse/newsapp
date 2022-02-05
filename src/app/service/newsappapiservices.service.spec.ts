import { TestBed } from '@angular/core/testing';

import { NewsappapiservicesService } from './newsappapiservices.service';

describe('NewsappapiservicesService', () => {
  let service: NewsappapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsappapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
