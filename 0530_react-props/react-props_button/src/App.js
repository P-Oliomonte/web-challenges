import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("I'm clicked");
  }

  return (
    <Button
      textColor="#224466"
      backgroundColor="#DDDDDD"
      text="Fantastic button"
      onClick={handleClick}
    />
  );
}

function Button({ textColor, backgroundColor, isDisabled, text, onClick }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: backgroundColor }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
