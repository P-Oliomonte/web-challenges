import Link from "next/link";
import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function getRandomVolume(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleRandomVolume() {
    const randomVolume = getRandomVolume(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1> The Lord Rings Volumes</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>

      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleRandomVolume}>
        Random Volume
      </button>
    </>
  );
}
