import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((response) => response.json());
const initialPage = { page: 1, pageIndex: 1 };

export default function HomePage() {
  const [page, setPage] = useState(initialPage);

  const { data, isLoading, error } = useSWR(
    `https://swapi.dev/api/people/?page=${page.page}`,
    fetcher
  );

  if (isLoading || !data) return <h1>Loading...</h1>;
  if (error) return <h1>An error occured during fetching</h1>;

  console.log(data);

  function handleNextPage() {
    setPage({
      page: page.page + 1,
      pageIndex: page.pageIndex + data.results.length,
    });
  }

  function handlePrevPage() {
    setPage({
      page: page.page - 1,
      pageIndex: page.pageIndex - data.results.length,
    });
  }

  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <h2>Page {page.page} </h2>
      <List>
        {data.results.map((character) => (
          <li key={character.name}>
            <StyledLink
              href={`/characters/${
                data.results.indexOf(character) + page.pageIndex
              }`}
              id={character.indexOf}
            >
              {character.name}
            </StyledLink>
          </li>
        ))}
      </List>
      <button
        type="button"
        onClick={handlePrevPage}
        disabled={data.previous === null}
      >
        Previous page
      </button>
      <button
        type="button"
        onClick={handleNextPage}
        disabled={data.next === null}
      >
        Next page
      </button>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: "➡️ ";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
`;
