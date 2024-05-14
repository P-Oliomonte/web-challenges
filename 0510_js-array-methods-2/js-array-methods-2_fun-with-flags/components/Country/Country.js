export function Country(foundCountries) {
  const countryList = document.createElement("ul");
  countryList.className = "country-list";

  foundCountries.forEach((country) => {
    const countryElement = document.createElement("li");
    countryElement.className = "country";

    const img = document.createElement("img");
    img.src = `https://flagcdn.com/160x120/${country.code.toLowerCase()}.png`;
    img.alt = `Flag of ${country.name}`;

    const name = document.createElement("p");
    name.textContent = country.name;

    countryElement.append(img, name);
    countryList.appendChild(countryElement);
  });
  return countryList;
}
