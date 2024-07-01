import { cities } from "../../lib/data";
import Link from "next/link";

export default function CitiesList() {
  return (
    <>
      <h1>List of Cities</h1>
      <ul>
        {cities.map((city) => {
          return (
            <li key={city.id}>
              <Link href={`/cities/${city.slug}`}>{city.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
