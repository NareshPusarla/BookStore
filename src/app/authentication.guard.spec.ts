import { TestBed } from '@angular/core/testing';

import { AuthserviceGuard } from './authentication.guard';

describe('AuthserviceGuard', () => {
  let guard: AuthserviceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthserviceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
