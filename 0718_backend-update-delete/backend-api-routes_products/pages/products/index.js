import useSWR from "swr";
import Button from "@/components/Button";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";

export default function HomePage() {
  const [isAdd, setIsAdd] = useState(false);
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

  function toggleIsAdd() {
    setIsAdd(!isAdd);
  }
  return (
    <>
      <StyledButtonContainer>
        <Button buttonText="Add a new fish" onClick={toggleIsAdd} />
      </StyledButtonContainer>
      {isAdd && (
        <ProductForm
          onSubmit={handleSubmit}
          value=""
          cancelValue={toggleIsAdd}
        />
      )}
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
              <StyledLink href={`/products/${product._id}`}>
                Link to fish
              </StyledLink>
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
  display: inline-block;
  min-width: 400px;

  padding-left: 20px;
  padding-right: 20px;
`;

const StyledCard = styled.li`
  min-width: 400px;
  list-style: none;
  border: 1px solid black;
  padding: 20px;
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px #ccc;
`;

const StyledButtonContainer = styled.div`
  display: block;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  background-color: #666;
  color: #fff;
  border-radius: 2px;
  text-decoration: none;
`;
