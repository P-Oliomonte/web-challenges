import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(
    id ? `/api/products/${id}` : null
  );

  if (isLoading || !product || !id) return <h1>Loading...</h1>;

  return (
    <>
      <StyledCard>
        <h2>{product.name}</h2>
        <h3>Description: {product.description}</h3>
        <h3>Category: {product.category}</h3>
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
      </StyledCard>
      <Link href="/products">Back to Overview</Link>
    </>
  );
}

const StyledCard = styled.div`
  border: 1px solid black;
  list-style: none;
  padding: 20px;
  margin-bottom: 10px;
`;
