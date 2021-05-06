import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  subText = '0';
  mainText = '0';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = ''; // String that represents the calculation being done
  memory = []; // hold previous answers

  answered = false; // Check if solution has been processed

  operatorSet = false;

  constructor() {}

  ngOnInit(): void {}

  pressKey(key: string) {
    if (this.mainText === '0') {
      this.mainText = '';
    }
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      console.log(this.mainText.length);
      if (
        lastKey === '/' ||
        lastKey === 'x' ||
        lastKey === '-' ||
        lastKey === '+'
      ) {
        this.operatorSet = true;
      }
      if (this.operatorSet || this.mainText === '') {
        return;
      }

      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }

    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
  }

  calculate() {
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);

    switch (this.operator) {
      case '/':
        this.subText = this.mainText;
        this.mainText = (this.operand1 / this.operand2).toString();
        this.subText = this.calculationString;
        if (this.mainText.length > 9) {
          this.mainText = this.mainText.substr(0, 9);
        }
        this.memory.push(this.mainText);
        break;
      case 'x':
        this.subText = this.mainText;
        this.mainText = (this.operand1 * this.operand2).toString();
        this.subText = this.calculationString;
        if (this.mainText.length > 9) {
          this.mainText = 'ERROR';
          this.subText = 'Range Exceeded';
        }
        this.memory.push(this.mainText);
        break;
      case '-':
        this.subText = this.mainText;
        this.mainText = (this.operand1 - this.operand2).toString();
        this.subText = this.calculationString;
        this.memory.push(this.mainText);
        break;
      case '+':
        this.subText = this.mainText;
        this.mainText = (this.operand1 + this.operand2).toString();
        this.subText = this.calculationString;
        if (this.mainText.length > 9) {
          this.mainText = 'ERROR';
          this.subText = 'Range Exceeded';
        }
        this.memory.push(this.mainText);
        break;
      default:
        this.subText = 'ERROR: Invalid Operation';
        break;
    }
    this.operatorSet = false;
    console.log(this.memory);
    this.answered = true;
  }

  allClear() {
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
    this.memory = [];
  }

  MemoryRecall() {
    this.mainText = this.memory[this.memory.length - 2];
  }

  MemoryAdd() {
    const memory = parseFloat(this.memory[this.memory.length - 2]);
    const operand = parseFloat(this.mainText);
    this.mainText = (memory + operand).toString();
    this.memory.push(this.mainText);
  }

  MemorySubtract() {
    const memory = parseFloat(this.memory[this.memory.length - 2]);
    const operand = parseFloat(this.mainText);
    this.mainText = (memory - operand).toString();
    this.memory.push(this.mainText);
  }
}
