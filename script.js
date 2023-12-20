let firstNumber;
let operator;
let secondNumber;
let displayValue = '';

const numbersDiv = document.querySelector('.numbers');
const operatorsDiv = document.querySelector('.operators');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('.clear');
const resultBtn = document.querySelector('.result');

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
})

function populateDisplay(content) {
  display.textContent = content;
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