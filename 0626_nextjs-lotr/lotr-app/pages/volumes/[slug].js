import Link from "next/link";
import Image from "next/image";
import { volumes } from "../lib/data";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  const currentIndex = volumes.indexOf(currentVolume);

  const prevVolume = currentIndex > 0 ? volumes[currentIndex - 1].slug : null;
  const nextVolume =
    currentIndex < volumes.length - 1 ? volumes[currentIndex + 1].slug : null;

  if (!currentVolume) {
    return (
      <>
        <Link href="/volumes">Back to volume overview</Link>
        <h2>Not found</h2>
      </>
    );
  }

  return (
    <>
      <Link href="/volumes">Back to volume overview</Link>
      <Image
        src={currentVolume.cover}
        width={149}
        height={230}
        alt={currentVolume.cover}
      />
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
      {prevVolume && <Link href={`/volumes/${prevVolume}`}>Previous</Link>}
      {nextVolume && <Link href={`/volumes/${nextVolume}`}>Next</Link>}
    </>
  );
}
