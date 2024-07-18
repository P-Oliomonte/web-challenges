import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";

export default function HomePage() {
  const { data: products, isLoading, mutate } = useSWR("/api/products");

  if (isLoading || !products) return <h1>Loading...</h1>;

  console.log(products);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <ProductForm onSubmit={handleSubmit} value="" />
      <StyledH1>All the fish</StyledH1>
      <StyledList>
        {products.map((product) => {
          return (
            <StyledCard key={product._id}>
              <h2>{product.name}</h2>
              <h3>Description: {product.description}</h3>
              <h2>
                Price: {product.price} {product.currency}
              </h2>
              <Link href={`/products/${product._id}`}>Link to fish</Link>
            </StyledCard>
          );
        })}
      </StyledList>
    </>
  );
}

const StyledH1 = styled.h1`
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledList = styled.ul`
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledCard = styled.li`
  display: block;
  list-style: none;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
