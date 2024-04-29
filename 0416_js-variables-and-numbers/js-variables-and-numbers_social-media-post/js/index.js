console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "This is my very important post";
const text =
  "In this very important post I'm going to tell you about the importance of this post.";
let likes = 0;
const user = "Tommy Poster";
let isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(text);
console.log("Likes:", likes);
console.log("User:", user);
console.log(isReported);

likes++;
console.log(title);
console.log(text);
console.log("Likes:", likes);
console.log("User;", user);
console.log(isReported);

// --^-- write your code here --^--
