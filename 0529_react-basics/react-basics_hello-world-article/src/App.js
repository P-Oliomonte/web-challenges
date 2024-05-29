import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>This is the first paragraph</p>
      <p>This is the second paragraph</p>
      <img
        src="https://media2.giphy.com/media/UO5elnTqo4vSg/200w.gif?cid=6c09b952u0fjmck0ec3kdyhnmv0oi8jjxtymwq3ptq7grfbj&ep=v1_gifs_search&rid=200w.gif&ct=g"
        alt="Shaq shakin"
        width="300"
      />
    </article>
  );
}
