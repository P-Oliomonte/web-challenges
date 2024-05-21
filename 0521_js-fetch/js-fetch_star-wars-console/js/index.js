console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const responseData = await response.json();

  console.log(response);
  console.log(responseData.results[2].eye_color);
}

fetchData();

// # Fetch Star Wars API and Log to Console

// Fetching data is awesome, yet it can be frightening in the beginning. But don't worry – we are going to help you familiarize yourself with the syntax of fetch and all will be fine ;)

// ## Task

// Have a look at the [`js/index.js`](./js/index.js) file: There is an `url` variable and an empty `fetchData()` function.

// Inside of the `fetchData()` function, use the `url` variable to fetch data from the Star Wars API.

// Log the fetched data to the console and play around with it:

// - log the entire data object
// - log different values of the data object
// - Bonus: Can you log the eye color of R2-D2?

// The following hints may guide you:

// - make sure to wait for all asynchronous operations

// Please switch to the [`js/index.js`](./js/index.js) file: May the force be with you!
