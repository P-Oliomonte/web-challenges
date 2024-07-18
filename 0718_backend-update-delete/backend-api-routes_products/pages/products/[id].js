import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";
import Button from "@/components/Button";

export default function DetailPage() {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  function toggleIsEdit() {
    setIsEdit(!isEdit);
  }

  const {
    data: product,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/products/${id}` : null);

  if (isLoading || !product || !id) return <h1>Loading...</h1>;

  async function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    toggleIsEdit();

    if (response.ok) {
      mutate();
    }
  }

  async function handleDelete() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/products");
    }
  }

  return (
    <>
      <StyledCard>
        <h2>{product.name}</h2>
        <h3>Description: {product.description}</h3>
        <h2>
          Price: {product.price} {product.currency}
        </h2>

        <div>
          {product.reviews.length > 0 &&
            product.reviews.map((review) => (
              <div key={review._id}>
                <h4>{review.rating} ⭐️ Review:</h4>
                <p>{review.title}</p>
                <p>{review.text}</p>
              </div>
            ))}
        </div>

        <StyledButtonContainer>
          <Button
            color="#EEE"
            type="button"
            buttonText="✏️ Edit"
            onClick={toggleIsEdit}
          />
          <Button
            color="#FFBCAE"
            type="button"
            buttonText="❌ Delete"
            onClick={handleDelete}
            disabled={isEdit}
          />
        </StyledButtonContainer>
        {isEdit && (
          <ProductForm
            onSubmit={handleUpdate}
            value={product}
            cancelValue={toggleIsEdit}
          />
        )}
      </StyledCard>
      <StyledLinkContainer>
        <StyledLink href="/products">Back to Overview</StyledLink>
      </StyledLinkContainer>
    </>
  );
}

const StyledCard = styled.li`
  min-width: 400px;
  margin: 20px;
  display: inline-block;
  list-style: none;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px #ccc;
`;

// const StyledLink = styled(Link)`

// `;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  margin-left: 20px;
  padding: 10px;
  background-color: #666;
  color: #fff;
  border-radius: 2px;
  text-decoration: none;
`;

const StyledLinkContainer = styled.div`
  padding-top: 30px;
`;
