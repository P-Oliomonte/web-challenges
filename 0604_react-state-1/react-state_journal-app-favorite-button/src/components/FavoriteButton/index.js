import "./FavoriteButton.css";
import { useState } from "react";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
