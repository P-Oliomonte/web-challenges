import React from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = React.useState("");
  console.log(code);
  console.log(code.length);

  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    setCode(code + event.target.textContent);
  }

  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {code.length > 6 && <p>Too long</p>}
      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
