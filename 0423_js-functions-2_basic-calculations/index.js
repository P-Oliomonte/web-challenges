console.clear();

/*
Complete the functions add, subtract, multiply, divide and remainder.
They should return the result of the respective calculation:
- add: the sum of the two numbers
- subtract: the difference between the two numbers
- multiply: the product of the numbers
- divide: the division of the two numbers
- remainder: the modulo or remainder of of "a modulo b"
*/

function add(a, b) {
  const sum = a + b;
  return sum;
}

console.log(add(1, 2));

function subtract(a, b) {
  const difference = a - b;
  return difference;
}

console.log(subtract(2, 1));

function multiply(a, b) {
  const product = a * b;
  return product;
}

console.log(multiply(2, 2));

function divide(a, b) {
  const division = a / b;
  return division;
}

console.log(divide(4, 2));

function remainder(a, b) {
  const remain = a % b;
  return remain;
}

console.log(remainder(10, 3));

/*
These console.asserts check if your functions are correct. If nothing appears in your console it works properly!
*/

console.assert(
  add(1, 1) === 2,
  `add(1,1) should be 2, instead got ${add(1, 1)}`
);
console.assert(
  add(12, 192) === 204,
  `add(12,192) should be 204, instead got ${add(12, 192)}`
);
console.assert(
  add(-1020, 5843) === 4823,
  `add(-1020, 5843) should be 4823, instead got ${add(-1020, 5843)}`
);

console.assert(
  subtract(1, 1) === 0,
  `subtract(1,1) should be 0, instead got ${subtract(1, 1)}`
);
console.assert(
  subtract(12, 192) === -180,
  `subtract(12,192) should be -180, instead got ${subtract(12, 192)}`
);
console.assert(
  subtract(-1020, 5843) === -6863,
  `subtract(-1020, 5843) should be  -6863, instead got ${subtract(-1020, 5843)}`
);

console.assert(
  multiply(1, 1) === 1,
  `multiply(1,1) should be 1, instead got ${multiply(1, 1)}`
);
console.assert(
  multiply(12, 192) === 2304,
  `multiply(12,192) should be 2304, instead got ${multiply(12, 192)}`
);
console.assert(
  multiply(-1020, 5843) === -5959860,
  `multiply(-1020, 5843) should be  -5959860, instead got ${multiply(
    -1020,
    5843
  )}`
);

console.assert(
  divide(1, 1) === 1,
  `divide(1,1) should be 1, instead got ${divide(1, 1)}`
);
console.assert(
  divide(12, 192) === 0.0625,
  `divide(12,192) should be 0.0625, instead got ${divide(12, 192)}`
);
console.assert(
  divide(-1020, 5843) === -0.17456785897655314,
  `divide(-1020, 5843) should be  -0.17456785897655314, instead got ${divide(
    -1020,
    5843
  )}`
);

console.assert(
  remainder(1, 2) === 1,
  `remainder(1,2) should be 1, instead got ${remainder(1, 2)}`
);
console.assert(
  remainder(67, 24) === 19,
  `remainder(12,192) should be 19, instead got ${remainder(67, 24)}`
);
console.assert(
  remainder(231, 7) === 0,
  `remainder(-1020, 5843) should be 0, instead got ${remainder(231, 7)}`
);
