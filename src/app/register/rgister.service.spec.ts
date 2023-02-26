import { TestBed } from '@angular/core/testing';

import { RgisterService } from './rgister.service';

describe('RgisterService', () => {
  let service: RgisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RgisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
