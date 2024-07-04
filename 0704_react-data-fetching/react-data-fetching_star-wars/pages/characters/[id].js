import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Character() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;

  const {
    data: character,
    isLoading,
    error,
  } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  if (isLoading || !character) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured during fetching</h1>;
  console.log(character);
  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
    </Layout>
  );
}
