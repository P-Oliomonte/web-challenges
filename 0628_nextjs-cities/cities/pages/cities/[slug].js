import Link from "next/link";
import Image from "next/image";
import { cities } from "../../lib/data";
import { useRouter } from "next/router";

export default function CityDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentCity = cities.find((city) => city.slug === slug);

  return (
    <>
      <Link href="/cities">Go back</Link>
      <h1>{currentCity.name}</h1>
      <h2>Country: {currentCity.country}</h2>
      <h3>Population: {currentCity.population}</h3>
      <p>{currentCity.description}</p>
    </>
  );
}
