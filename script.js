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

const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operatorKeys = ['+', '-', '*', '/'];

for (let i = 1; i < 10; i++) {
  const newNumber = document.createElement('button');
  newNumber.textContent = i;
  newNumber.classList.add('number');
  numbers.appendChild(newNumber);
}

// EVENT LISTENERS
document.addEventListener('keypress', (e) => {
  e.preventDefault();

  if (displayValue.length < displayValueLength) {
    if (numberKeys.includes(e.key)) {
      displayValue += e.key;
      populateDisplay(displayValue);
    } else if (operatorKeys.includes(e.key)) {
      if (firstNumber) {
        callOperate();
      }
      operator = e.key;
      firstNumber = displayValue;
      displayValue = '';
    } else if (e.key === '.') {
      if (!displayValue.includes('.')) {
        displayValue += e.key;
        populateDisplay(displayValue);
      }
    } else if (e.key === '=' || e.key === "Enter") {
      callOperate();
    }
  }
})

numbers.addEventListener('click', (e) => {
  if (displayValue.length < displayValueLength
    && e.target.localName == 'button'
    && e.target.classList.contains('number')
    )
    {
      displayValue += e.target.textContent;
      populateDisplay(displayValue);
  }
})

document.querySelector('.dot').addEventListener('click', (e) => {
  if (displayValue.length < displayValueLength && !displayValue.includes('.')) {
      displayValue += e.target.textContent;
      populateDisplay(displayValue);
  }
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
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;