import Link from "next/link";
import Image from "next/image";
import { volumes } from "../lib/data";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  const currentIndex = volumes.indexOf(currentVolume);

  const prevVolume = currentIndex > 0 ? volumes[currentIndex - 1].slug : null;
  const nextVolume =
    currentIndex < volumes.length - 1 ? volumes[currentIndex + 1].slug : null;

  if (!currentVolume) {
    return (
      <>
        <Link href="/volumes">Back to volume overview</Link>
        <h2>Not found</h2>
      </>
    );
  }

  return (
    <DetailWrapper>
      <Link href="/volumes">All Volumes</Link>

      <Title $color={currentVolume.color}>{currentVolume.title}</Title>
      <Description>{currentVolume.description}</Description>

      <BooksWrapper>
        <ul>
          {currentVolume.books.map((book) => {
            return (
              <BookListPoint key={book.ordinal}>
                <BookOrdinal>{book.ordinal}:</BookOrdinal>
                <BookTitle>{book.title}</BookTitle>
              </BookListPoint>
            );
          })}
        </ul>
        <ImageContainer>
          <Image
            src={currentVolume.cover}
            width={149}
            height={230}
            alt={currentVolume.cover}
          />
        </ImageContainer>
      </BooksWrapper>
      {prevVolume && <Link href={`/volumes/${prevVolume}`}>Previous</Link>}
      {nextVolume && <Link href={`/volumes/${nextVolume}`}>Next</Link>}
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  font-family: var(--font-family);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${({ $color }) => $color};
  padding: 2rem;
  padding-bottom: 0;
`;

const Description = styled.p`
  color: ${({ $color }) => $color};
  padding: 2rem;
  padding-top: 0;
  padding-bottom: 1rem;
`;

const BooksWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  background-color: ${({ $color }) => $color};
  padding: 2rem;
  color: white;
`;

const ImageContainer = styled.div`
  box-shadow: var(--box-shadow-book);
`;

const BookListPoint = styled.li`
  list-style: none;
`;

const BookOrdinal = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  padding-top: 1.5rem;
`;

const BookTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;
