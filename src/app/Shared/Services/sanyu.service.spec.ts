import { TestBed } from '@angular/core/testing';

import { SanyuService } from './sanyu.service';

describe('SanyuService', () => {
  let service: SanyuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanyuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
