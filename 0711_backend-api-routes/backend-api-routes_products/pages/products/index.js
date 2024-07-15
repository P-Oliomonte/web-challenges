import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  const { data: products, isLoading } = useSWR("/api/products");

  if (isLoading || !products) return <h1>Loading...</h1>;

  console.log(products);

  return (
    <>
      <h1>All the fish</h1>
      <ul>
        {products.map((product) => {
          return (
            <StyledList key={product.id}>
              <h2>{product.name}</h2>
              <h3>Description: {product.color}</h3>
              <h3>Category: {product.category}</h3>
              <h2>
                Price: {product.price} {product.currency}
              </h2>
              <Link href={`/products/${product.id}`}>Link to fish</Link>
            </StyledList>
          );
        })}
      </ul>
    </>
  );
}

const StyledList = styled.li`
  border: 1px solid black;
  list-style: none;
  padding: 20px;
  margin-bottom: 10px;
`;
