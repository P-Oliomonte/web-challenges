console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("Data:", data);

  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);

  const operator = data.operator;

  let result;

  if (operator === "addition") {
    result = add(numberA, numberB);
  } else if (operator === "substraction") {
    result = subtract(numberA, numberB);
  } else if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else {
    result = divide(numberA, numberB);
  }

  resultOutput.textContent = result;
});
