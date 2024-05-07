console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const socialMediaPost = document.createElement("article");
socialMediaPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("foorter");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";

const likeButton2 = document.createElement("button");
likeButton2.classList.add("post__button");
likeButton2.textContent = "♥ Like";

likeButton2.addEventListener("click", handleLikeButtonClick);

document.querySelector("body").append(socialMediaPost);
socialMediaPost.append(postContent);
socialMediaPost.append(postFooter);
postFooter.append(postUsername);
postFooter.append(likeButton2);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// This page shows an example of a social media post.
// Your task is to replicate the social media post with JavaScript.
// Use `document.createElement()` to generate all HTML elements separately.

// Don't use `.innerHTML` to create the HTML in one instance, but use
// multiple calls of `document.createElement()` instead.

// The `index.html` demonstrates the required HTML tags, structure and
// class names.

// Append the second social media post to the body.
// Don't forget to add the event listener to the like button.
// You can use the function `handleLikeButtonClick` for the event listener.
