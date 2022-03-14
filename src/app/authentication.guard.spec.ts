import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthserviceGuard } from './authentication.guard';

describe('AuthserviceGuard', () => {
  let guard: AuthserviceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    guard = TestBed.inject(AuthserviceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
