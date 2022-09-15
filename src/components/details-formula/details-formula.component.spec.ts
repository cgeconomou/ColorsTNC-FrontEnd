import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormulaComponent } from './details-formula.component';

describe('DetailsFormulaComponent', () => {
  let component: DetailsFormulaComponent;
  let fixture: ComponentFixture<DetailsFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFormulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
