import { TestBed } from '@angular/core/testing';

import { AuthServiceTsService } from '../auth/auth.service';

describe('AuthServiceTsService', () => {
  let service: AuthServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
