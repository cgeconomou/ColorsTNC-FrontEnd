import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWarehouseProductComponent } from './create-warehouse-product.component';

describe('CreateWarehouseProductComponent', () => {
  let component: CreateWarehouseProductComponent;
  let fixture: ComponentFixture<CreateWarehouseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWarehouseProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWarehouseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
