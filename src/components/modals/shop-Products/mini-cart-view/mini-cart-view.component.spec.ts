import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartViewComponent } from './mini-cart-view.component';

describe('MiniCartViewComponent', () => {
  let component: MiniCartViewComponent;
  let fixture: ComponentFixture<MiniCartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCartViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
