export default function Avatar({ children }) {
  function handleClick() {
    console.log("I could toggle a profile!");
  }
  return (
    <button type="button" onClick={handleClick} aria-label="toggle profile">
      {children}
    </button>
  );
}
