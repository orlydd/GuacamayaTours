import { TestBed } from '@angular/core/testing';

import { HotelsService } from './Hotels.service';

describe('HotelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelsService = TestBed.get(HotelsService);
    expect(service).toBeTruthy();
  });
});
