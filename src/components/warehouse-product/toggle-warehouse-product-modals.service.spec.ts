import { TestBed } from '@angular/core/testing';

import { ToggleWarehouseProductModalsService } from './toggle-warehouse-product-modals.service';

describe('ToggleWarehouseProductModalsService', () => {
  let service: ToggleWarehouseProductModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleWarehouseProductModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
