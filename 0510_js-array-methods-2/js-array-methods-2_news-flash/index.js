import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((newsCard) => {
  return newsCard.categories.includes("politics");
});

// Part 2 - start here
const sortedNews = filteredNews.toSorted(
  (a, b) => a.body.length - b.body.length
);

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here. Have a look at the console to see if you're right or wrong.
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);

// ### Part 1: Filter

// Have a look at the `./js/index.js` file: There is a variable `filteredNews` declared with `news.filter()` and a return value `true`.

// You task is to change the filter method:

// - filter all cards which have the category "politics" in their category array
// - to do so, use the `includes` method on `card.categories`

// ### Part 2: Sort

// In the `./js/index.js` file, you will find another variable called `sortedNews` declared with the value of `filteredNews`.

// Use the toSorted() method to sort all filtered cards by the length of their body text.
