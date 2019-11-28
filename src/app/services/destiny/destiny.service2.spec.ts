import { TestBed } from '@angular/core/testing';

import { DestinyService2 } from './destiny.service2';

describe('DestinyService2', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinyService2 = TestBed.get(DestinyService2);
    expect(service).toBeTruthy();
  });
});
