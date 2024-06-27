import Link from "next/link";
import { volumes } from "../lib/data";

export default function Volume1() {
  const currentVolume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );

  const currentIndex = volumes.indexOf(currentVolume);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
  const nextIndex = currentIndex < volumes.length - 1 ? currentIndex + 1 : null;
  const prevVolume =
    prevIndex !== null ? volumes[prevIndex].slug : currentVolume.slug;
  const nextVolume =
    nextIndex !== null ? volumes[nextIndex].slug : currentVolume.slug;

  console.log("PrevIndex: ", prevIndex);
  console.log("NextIndex: ", nextIndex);
  console.log("NextVolume: ", nextVolume);
  console.log("CurrentIndex: ", currentIndex);

  return (
    <>
      <Link href="/volumes">Back to volume overview</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              <h3>{book.ordinal}:</h3>
              <h2>{book.title}</h2>
            </li>
          );
        })}
      </ul>
      <Link href={`/volumes/${prevVolume}`}>Previous</Link>
      <Link href={`/volumes/${nextVolume}`}>Next</Link>
    </>
  );
}
