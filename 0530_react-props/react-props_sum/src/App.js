import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={1} valueB={2} />
      <Sum valueA={500} valueB={734} />
      <Sum valueA={13498} valueB={137563297} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}
