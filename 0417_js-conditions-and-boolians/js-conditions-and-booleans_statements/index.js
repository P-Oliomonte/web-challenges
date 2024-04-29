console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd

const number = 0;

if (number % 2 !== 0) {
  console.log("Odd number");
} else if (number === 0) {
  console.log("Exacltly 0");
} else {
  console.log("Even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 5;

if (numberOfHotdogs > 0 && numberOfHotdogs < 5) {
  console.log("Price: ", numberOfHotdogs * 2);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("Price: ", numberOfHotdogs * 1.5, "Euro");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("Price: ", numberOfHotdogs * 1);
} else if (numberOfHotdogs >= 1000000) {
  console.log("Price: ", numberOfHotdogs * 0.1);
} else {
  console.log(`Haha! You owe me ${Math.abs(numberOfHotdogs)} hotdogs`);
}

// Part 4: Daytime
const currentHour = 18;

const statement =
  currentHour < 17
    ? console.log("Still need to learn...")
    : console.log("Partytime!!!");

console.log(statement);

// Part 5:

const userName1 = "Andrea";

const greeting =
  userName1 === "Andrea" ? "Hello Coach!" : "Hello " + userName1 + "!";

console.log(greeting);

// Part 5.2

const userName2 = "Andrea";

const greeting2 =
  "Hello " + (userName2 === "Andrea" ? "Coach" : userName2) + "!";

console.log(greeting2);
