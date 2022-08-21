import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormulaComponent } from './update-formula.component';

describe('UpdateFormulaComponent', () => {
  let component: UpdateFormulaComponent;
  let fixture: ComponentFixture<UpdateFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
