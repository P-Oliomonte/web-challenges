console.clear();

const form = document.querySelector("form");
const userEmail = document.querySelector('[data-js="generated-email"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements);

  const firstName = formElements.firstName.value.toLowerCase();
  const lastName = formElements.lastName.value.toLowerCase();
  const provider = formElements.provider.value.toLowerCase();
  const email = `${firstName}.${lastName}@${provider}`;

  userEmail.innerText = email;
});

// First challenge without eventListener

// const newUser = {
//   firstName: "Michael",
//   lastName: "Knight",
//   provider: "FLAG.com",
// };

// function generateEmail(user) {
//   const firstName = user.firstName.toLowerCase();
//   const lastName = user.lastName.toLowerCase();
//   const provider = user.provider.toLowerCase();
//   const email = `${firstName}.${lastName}@${provider}`;
//   return email;
// }

// const userEmail = generateEmail(newUser);

// console.log(userEmail);
