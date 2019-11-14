import { TestBed } from '@angular/core/testing';

import { DestinyService } from './destiny.service';

describe('DestinyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinyService = TestBed.get(DestinyService);
    expect(service).toBeTruthy();
  });
});
