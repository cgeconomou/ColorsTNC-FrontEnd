import { TestBed } from '@angular/core/testing';

import { UpdateFormulaService } from './update-formula.service';

describe('UpdateFormulaService', () => {
  let service: UpdateFormulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFormulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
