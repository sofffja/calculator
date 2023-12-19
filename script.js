let firstNumber;
let operator;
let secondNumber;

const uiNumbers = document.querySelector('.numbers');
for (let i = 0; i < 10; i++) {
  const newUiNumber = document.createElement('button');
  newUiNumber.textContent = i;
  uiNumbers.appendChild(newUiNumber);
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