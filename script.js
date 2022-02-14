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
function operator(func, a, b) {
  return func(a, b);
}

// Query selectors
const displayValue = document.querySelector(".display");
let numberButtons = document.querySelectorAll(".number-button");
let operationButtons = document.querySelectorAll(".operation-button");

// Event listener for the number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue.textContent += button.textContent;
  });
});
// Event listener for the operation buttons
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue.textContent += button.textContent;
  });
});


