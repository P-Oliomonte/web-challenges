console.clear();

import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/Square.js";
import Pentagon from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);

// Now refactor the JavaScript code so that we can split the code into small Components.

// - wrap the creation of the circle element including the `addEventListener` into a separate function starting with a capital letter, e.g. `Circle`
// - after the element is created and all modifications are applied, return the element
// - call the function and save the returned value a variable, e.g. `circleElement`
// - append the element to the root element.

// The circle should now be visible as before. Now we need to outsource the component into its own file.

// - create a file `Circle.js` inside the [Circle](./components/Circle) folder
// - move the component function inside this file and export it as the default.
// - import the component function inside the `index.js`.
