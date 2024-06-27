import Link from "next/link";
import { volumes } from "../lib/data";

export default function Volume3() {
  const volumeData = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href="/volumes">Back to volume overview</Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        {volumeData.books.map((book) => {
          return (
            <>
              <h3>{book.ordinal}:</h3>
              <h2>{book.title}</h2>
            </>
          );
        })}
      </ul>
    </>
  );
}
