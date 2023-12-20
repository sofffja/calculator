let firstNumber;
let operator;
let secondNumber;
let result;
let displayValue = '';
const displayValueLength = 19;

const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
const display = document.querySelector('.display');
const resultBtn = document.querySelector('.result');
const clearBtn = document.querySelector('.clear');

for (let i = 1; i < 10; i++) {
  const newNumber = document.createElement('button');
  newNumber.textContent = i;
  numbers.appendChild(newNumber);
}

// EVENT LISTENERS

numbers.addEventListener('click', (e) => {
  if (displayValue.length < displayValueLength
    && e.target.textContent !== '=')
    {
      displayValue += e.target.textContent;
      populateDisplay(displayValue)
    }
  e.stopPropagation();
})

operators.addEventListener('click', (e) => {
  if (firstNumber) {
    callOperate();
  }
  operator = e.target.textContent;
  firstNumber = displayValue;
  displayValue = '';
})

resultBtn.addEventListener('click', () => {
  callOperate();
})

clearBtn.addEventListener('click', clear);

// FUNCTIONS

function clear() {
  displayValue = '';
  firstNumber = null;
  secondNumber = null;
  operator = null;                   
  populateDisplay('0');
}

function populateDisplay(content) {
  display.textContent = content;
}

function callOperate() {
  secondNumber = displayValue;

  if (firstNumber && operator) {
    if (secondNumber == 0 && operator == '/') {
      clear();
      populateDisplay('NO!');
      return;
    }
    result = operate(+firstNumber, operator, +secondNumber);
    displayValue = result;
    populateDisplay(displayValue);

    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);

    operator = null;
  }
}

function operate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
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