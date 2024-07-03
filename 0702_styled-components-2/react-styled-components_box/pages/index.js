import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "../components/BoxWithStyledComponents";
import styled from "styled-components";

export default function HomePage() {
  const BoxContainer = styled.div`
    display: flex;
  `;

  return (
    <BoxContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </BoxContainer>
  );
}
