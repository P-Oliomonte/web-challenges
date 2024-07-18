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
  padding: 5px;
  background-color: ${(props) => props.color};
  border: 1px solid #666;
  border-radius: 2px;
`;
