import { TestBed } from '@angular/core/testing';

import { Auth.ValidateService } from './auth.validate.service';

describe('Auth.ValidateService', () => {
  let service: Auth.ValidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth.ValidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
