import { TestBed } from '@angular/core/testing';

import { LoginMemoryService } from './login-memory.service';

describe('LoginMemoryService', () => {
  let service: LoginMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
