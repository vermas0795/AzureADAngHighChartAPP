import { TestBed } from '@angular/core/testing';

import { ValService } from './val.service';

describe('ValService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValService = TestBed.get(ValService);
    expect(service).toBeTruthy();
  });
});
