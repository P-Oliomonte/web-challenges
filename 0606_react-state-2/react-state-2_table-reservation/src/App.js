import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(2);

  const [maxPeople, setMaxPeople] = useState("");

  function handleIncrement() {
    people < 10 ? setPeople(people + 1) : setMaxPeople("Sorry, max. 10 people");
  }

  function handleDecrement() {
    people > 1 && setPeople(people - 1);
    setMaxPeople("");
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <p>You are going to reserve a table for {people} people.</p>
      <h3>{maxPeople}</h3>
    </div>
  );
}
