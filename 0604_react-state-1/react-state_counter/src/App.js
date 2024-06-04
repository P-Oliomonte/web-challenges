import React from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            const newCount = count - 1;
            setCount(newCount);
            console.log(newCount);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            const newCount = count + 1;
            setCount(newCount);
            console.log(newCount);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
