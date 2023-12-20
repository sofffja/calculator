let firstNumber;
let operator;
let secondNumber;
let result;
let displayValue = '';

const numbersDiv = document.querySelector('.numbers');
const operatorsDiv = document.querySelector('.operators');
const display = document.querySelector('.display');
const resultBtn = document.querySelector('.result');
const clearBtn = document.querySelector('.clear');

for (let i = 0; i < 10; i++) {
  const newNumbersElement = document.createElement('button');
  newNumbersElement.textContent = i;
  numbersDiv.appendChild(newNumbersElement);
}

numbersDiv.addEventListener('click', (e) => {
  displayValue += e.target.textContent;
  populateDisplay(displayValue)
})

operatorsDiv.addEventListener('click', (e) => {
  operator = e.target.textContent;
  firstNumber = displayValue;
  displayValue = '';
})

resultBtn.addEventListener('click', () => {
  callOperate();
})

clearBtn.addEventListener('click', clear);

function clear() {
  displayValue = '';
  populateDisplay(displayValue);
}

function populateDisplay(content) {
  display.textContent = content;
}

function callOperate() {
  secondNumber = displayValue;
  if (firstNumber && operator) {
    console.log(`${firstNumber} ${operator} ${secondNumber}`)
    result = operate(+firstNumber, operator, +secondNumber);
    populateDisplay(result);
    displayValue = ''
  }
}

function operate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}