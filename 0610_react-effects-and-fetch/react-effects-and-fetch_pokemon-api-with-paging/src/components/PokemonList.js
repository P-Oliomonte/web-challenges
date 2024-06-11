import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({});
  const [url, setURL] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  console.log(url);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  if (!pokemon.results) {
    return <p>...loading</p>;
  }

  function floorToNearestTwenty(value) {
    return Math.floor(value / 20) * 20;
  }

  function handlePageIncrease() {
    pokemon.next === null
      ? setURL("https://pokeapi.co/api/v2/pokemon?offset=0")
      : setURL(pokemon.next);
  }

  function handlePageDecrease() {
    pokemon.previous === null
      ? setURL(
          `https://pokeapi.co/api/v2/pokemon?offset=${floorToNearestTwenty(
            pokemon.count
          )}`
        )
      : setURL(pokemon.previous);
  }

  console.log(pokemon);

  return (
    <main>
      <button type="button" onClick={handlePageDecrease}>
        Previous Page
      </button>
      <button type="button" onClick={handlePageIncrease}>
        Next Page
      </button>
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
