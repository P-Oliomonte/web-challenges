import styled from "styled-components";

export default function Button({ type, color, buttonText, onClick, disabled }) {
  return (
    <StyledButton
      type={type}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-family: "Signika", sans-serif;
  padding: 8px;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${(props) => props.color};
  border: 1px solid #666;
  border-radius: 2px;
`;
