import { Component } from '@angular/core';
import { CalculateIMC } from '../../assets/ts/script';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculateImc() {
    CalculateIMC();
  }
}