import { Component, OnInit } from '@angular/core';
import { Calculation } from './calculation';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  result = 0;
  model = new Calculation('10', '10');

  constructor() {

  }

  ngOnInit() {

  }

  clickCalcButton() {
    const a = parseInt(this.model.number1, 10);
    const b = parseInt(this.model.number2, 10);
    this.result = this.calc(a, b);
  }

  calc(a, b) {
    return a + b;
  }

}
