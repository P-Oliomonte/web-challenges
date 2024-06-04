import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    // Check that the value changes correctly.
    console.log(newIsActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
