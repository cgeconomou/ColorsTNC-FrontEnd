import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWarehouseProductComponent } from './update-warehouse-product.component';

describe('UpdateWarehouseProductComponent', () => {
  let component: UpdateWarehouseProductComponent;
  let fixture: ComponentFixture<UpdateWarehouseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWarehouseProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWarehouseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
