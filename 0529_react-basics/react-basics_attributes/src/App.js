import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">This is the headline</h2>
      <label htmlFor="input-element">This is the input label</label>
      <input id="input-element" />
      <a className="article__link" href="https://www.google.de" target="blank">
        This is a link
      </a>
    </article>
  );
}
