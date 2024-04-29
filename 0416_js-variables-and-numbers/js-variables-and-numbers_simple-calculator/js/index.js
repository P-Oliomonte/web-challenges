console.clear();

let operand1 = 0;
let operand2 = 0;

console.log("Operand1:", operand1, "Operand2:", operand2);
/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const addedOperands = operand1 + operand2;
  console.log(`${operand1} + ${operand2} = ${addedOperands}`);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  const subtractedOperands = operand1 - operand2;
  console.log(`${operand1} - ${operand2} = ${subtractedOperands}`);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const multipliedOperands = operand1 * operand2;
  console.log(`${operand1} * ${operand2} = ${multipliedOperands}`);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const devidedOperands = operand1 / operand2;
  console.log(`${operand1} / ${operand2} = ${devidedOperands}`);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const exponentedOperands = operand1 ** operand2;
  console.log(
    `${operand1} to the power of ${operand2} = ${exponentedOperands}`
  );
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const moduloOperand = operand1 % operand2;
  console.log(
    `Remainder of ${operand1} devided by ${operand2} = ${moduloOperand}`
  );
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase1-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase1-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease1-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease1-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply1-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide1-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
  operand1++;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
  operand1 = operand1 + 5;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
  operand1--;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
  operand1 = operand1 - 5;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
  operand1 = operand1 * 2;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
  operand1 = operand1 / 2;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

/*
Update the second operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButtonOp2 = document.querySelector(
  '[data-js="increase2-by-one"]'
);
const increaseByFiveButtonOp2 = document.querySelector(
  '[data-js="increase2-by-five"]'
);
const decreaseByOneButtonOp2 = document.querySelector(
  '[data-js="decrease2-by-one"]'
);
const decreaseByFiveButtonOp2 = document.querySelector(
  '[data-js="decrease2-by-five"]'
);
const multiplyByTwoButtonOp2 = document.querySelector(
  '[data-js="multiply2-by-two"]'
);
const divideByTwoButtonOp2 = document.querySelector(
  '[data-js="divide2-by-two"]'
);

increaseByOneButtonOp2.addEventListener("click", () => {
  operand2++;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

increaseByFiveButtonOp2.addEventListener("click", () => {
  operand2 = operand2 + 5;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

decreaseByOneButtonOp2.addEventListener("click", () => {
  operand2--;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

decreaseByFiveButtonOp2.addEventListener("click", () => {
  operand2 = operand2 - 5;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

multiplyByTwoButtonOp2.addEventListener("click", () => {
  operand2 = operand2 * 2;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

divideByTwoButtonOp2.addEventListener("click", () => {
  operand2 = operand2 / 2;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});

const buttonDelete = document.querySelector('[data-js="button-delete"]');

buttonDelete.addEventListener("click", () => {
  console.clear();
  operand1 = 0;
  operand2 = 0;
  console.log("Operand1:", operand1, "Operand2:", operand2);
});
