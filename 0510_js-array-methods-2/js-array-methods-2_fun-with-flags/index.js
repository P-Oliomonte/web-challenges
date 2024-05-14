import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

const lowerCaseCountries = countries.map((country) => ({
  name: country.name.toLowerCase(),
  code: country.code,
}));

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase();

  const foundLowerCaseCountries = lowerCaseCountries.filter((country) =>
    country.name.startsWith(searchString)
  );

  const foundCountries = foundLowerCaseCountries.map((country) => ({
    name: country.name.charAt(0).toUpperCase() + country.name.slice(1),
    code: country.code,
  }));

  console.log(foundCountries);

  if (foundCountries) {
    const countryList = Country(foundCountries);
    container.append(countryList);
  }
});

// ### 1. Find One Matching Country

// Inside the event listener, use the `find` method to find
// the country in the countries array which name starts with the search string.

// > 💡 Strings have a method `startsWith(string)`, which might be helpful.

// > 💡 Each country in the array has a name attribute.

// > 💡 Can you make the search 'case-insensitive'?

// ### 2. Find All Matching Countries

// Change the method from `find` to `filter`, to filter the countries to those which
// name starts with the search string. Remember to change the variable name from `foundCountry`
// to `foundCountries` to reflect that it now is an array.

// Adapt the rendering of the found countries. You'll need to loop over the array of
// `foundCountries`. Which array method can you use for that?
