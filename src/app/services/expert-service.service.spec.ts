import { TestBed } from '@angular/core/testing';

import { ExpertServiceService } from './expert-service.service';

describe('ExpertServiceService', () => {
  let service: ExpertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
