import { TestBed } from '@angular/core/testing';

import { CreateFormulaService } from './create-formula.service';

describe('CreateFormulaService', () => {
  let service: CreateFormulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateFormulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
