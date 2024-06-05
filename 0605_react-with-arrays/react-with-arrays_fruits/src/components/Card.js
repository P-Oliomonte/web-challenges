import "./Card.css";

export default function Card({ name, color }) {
  return (
    <>
      <p className={`card card--${color}`}>
        The color of {name} is {color}
      </p>
    </>
  );
}
