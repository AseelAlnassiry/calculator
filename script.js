// Operator functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

function operator(button, a, b) {
  if (button === "+") {
    return add(a, b);
  } else if (button === "-") {
    return subtract(a, b);
  } else if (button === "*") {
    return multiply(a, b);
  } else {
    return devide(a, b);
  }
}

// Variables
let firstValue = undefined;
let secondValue = undefined;
let answer = undefined;
let currentOperation = undefined;

// Query selectors
const displayValue = document.querySelector(".display");
let numberButtons = document.querySelectorAll(".number-button");
let operationButtons = document.querySelectorAll(".operation-button");
let clearButton = document.querySelector("#clear-button");
let equalsButton = document.querySelector("#equals-button");

// Event listener for the number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!answer) {
      displayValue.textContent += button.textContent;
    } else {
      displayValue.textContent = "";
      firstValue = answer;
      answer = undefined;
      displayValue.textContent += button.textContent;
    }
  });
});

// Event listner for the clear button
clearButton.addEventListener("click", () => {
  firstValue = undefined;
  secondValue = undefined;
  answer = undefined;
  displayValue.textContent = "";
});

// Event listener for the operation buttons
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstValue === undefined) {
      firstValue = parseFloat(displayValue.textContent);
      displayValue.textContent = "";
      currentOperation = button;
    } else {
      secondValue = parseFloat(displayValue.textContent);
      answer = operator(currentOperation.textContent, firstValue, secondValue);
      displayValue.textContent = answer;
      currentOperation = button;
    }
  });
});

// Event listner for the Equals button
equalsButton.addEventListener("click", () => {
  if (firstValue !== undefined) {
    secondValue = parseFloat(displayValue.textContent);
    answer = operator(currentOperation.textContent, firstValue, secondValue);
    displayValue.textContent = answer;
    firstValue = undefined;
    secondValue = undefined;
  }
});
