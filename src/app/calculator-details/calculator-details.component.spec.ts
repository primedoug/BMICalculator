import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDetailsComponent } from './calculator-details.component';

describe('CalculatorDetailsComponent', () => {
  let component: CalculatorDetailsComponent;
  let fixture: ComponentFixture<CalculatorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorDetailsComponent]
    });
    fixture = TestBed.createComponent(CalculatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
