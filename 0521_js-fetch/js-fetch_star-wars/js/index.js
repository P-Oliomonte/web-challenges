import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

// const EXAMPLE_DATA = {
//   name: "Luke Skywalker",
//   height: "172",
//   mass: "77",
//   hairColor: "blond",
//   skin_color: "fair",
//   eye_color: "blue",
//   birth_year: "19BBY",
//   gender: "male",
//   homeworld: "https://swapi.dev/api/planets/1/",
//   films: [
//     "https://swapi.dev/api/films/1/",
//     "https://swapi.dev/api/films/2/",
//     "https://swapi.dev/api/films/3/",
//     "https://swapi.dev/api/films/6/",
//   ],
//   species: [],
//   vehicles: [
//     "https://swapi.dev/api/vehicles/14/",
//     "https://swapi.dev/api/vehicles/30/",
//   ],
//   starships: [
//     "https://swapi.dev/api/starships/12/",
//     "https://swapi.dev/api/starships/22/",
//   ],
//   created: "2014-12-09T13:50:51.644000Z",
//   edited: "2014-12-20T21:17:56.891000Z",
//   url: "https://swapi.dev/api/people/1/",
// };

// // Create dom element for a card and append it to the root
// const firstCard = Card(EXAMPLE_DATA);
// renderElement(firstCard);

fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  let i = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const url = `https://swapi.py4e.com/api/people/?page=${i}`;
    const response = await fetch(url);
    const responseData = await response.json();
    const characters = responseData.results;

    console.log(responseData);

    characters.forEach((character) => {
      const card = Card(character);
      renderElement(card);
    });
    hasNextPage = responseData.next !== null;
    i++;
  }
}

// Have a look at the [`js/index.js`](./js/index.js) file: There is an `EXAMPLE_DATA` object
// with information about Luke Skywalker. We use this object to create a DOM element with the `Card()`
// function and append this element to the DOM with the help of `renderElement`.

// This approach is very static and not very handy. Lets get more data and create new cards from them dynamically!

// ### Task 1: Fetch data from the Star Wars Api:

// Fetch data from the star wars api (https://swapi.py4e.com/api/people).

// Use the `async` and `await` keywords to receive the response and request the data with the `.json() method`.
// Use a `console.log()` to look at the received data!

// ### Task 2: Moooooooooore cards!

// Use an array method to create and render a card for each object in the fetched data array.

// The following hints may guide you:

// - What was the array method again to perform an action **for each** element?
// - You can use the functions `Card()` and `renderElement()` to create those cards, see the explanation above!

// Please switch to the [`js/index.js`](./js/index.js) file to start counting!
