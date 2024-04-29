console.clear();

const form = document.querySelector('[data-js="form"]');

// Use JavaScript to react to the form submission.

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  //   console.log(event.target.elements);

  // Log all form data (in object form) into the console in the submit event handler.

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("Data:", data);

  const firstNameInput = formElements.firstName;

  firstNameInput.focus();

  console.log(formElements.age.value);
  console.log(formElements.badness.value);

  const ageData = Number(formElements.age.value);
  const badnessData = Number(formElements.badness.value);

  const ageBadnessSum = ageData + badnessData;

  const firstNameData = firstNameInput.value;
  console.log(firstNameData);

  console.log(`The age-badness-sum of ${firstNameData} is ${ageBadnessSum}`);

  event.target.reset();

  // The age-badness-sum of "firstName" is "age-badness-sum"
});

// Make sure the form is reset and the First Name input is focused after submission.
