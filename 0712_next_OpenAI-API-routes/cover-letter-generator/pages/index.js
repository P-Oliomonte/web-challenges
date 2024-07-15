import { useState } from "react";
import styled from "styled-components";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export default function HomePage() {
  const [apiOutput, setApiOutput] = useState("Output...");
  const [isCopied, setIsCOpied] = useState(false);

  async function callGenerateEndpoint(userInfo, companyInfo) {
    setApiOutput("AI is generating your cover letter...");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo, companyInfo }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(output);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const userInfo = data.userInfo;
    const companyInfo = data.companyInfo;

    callGenerateEndpoint(userInfo, companyInfo);
    setIsCOpied(false);
  }

  function handleReset(event) {
    const form = event.target.closest("form");
    form.reset();
  }

  function handleCopy(copyText) {
    navigator.clipboard.writeText(copyText);
    setIsCOpied(true);
  }

  return (
    <StyledContainer>
      <h1 style={{ color: "turquoise" }}>Cover Letter Generator</h1>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="user-info">
          Enter a few words about yourself
        </StyledLabel>
        <StyledInput type="text" id="user-info" name="userInfo" />

        <StyledLabel htmlFor="companyInfo">
          Enter a few words about yourself
        </StyledLabel>
        <StyledInput type="text" id="companyInfo" name="companyInfo" />

        <ButtonContainer>
          <StyledButton type="submit" style={{ backgroundColor: "turquoise" }}>
            Generate
          </StyledButton>
          <StyledButton type="button" onClick={handleReset}>
            Reset
          </StyledButton>
        </ButtonContainer>
      </form>

      <StyledOutput>{apiOutput}</StyledOutput>
      <StyledButton
        type="button"
        style={{ backgroundColor: "turquoise", marginBottom: "30px" }}
        onClick={() => handleCopy(apiOutput)}
      >
        {isCopied ? "Copied" : "Copy"}
      </StyledButton>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 80vw;
  max-width: 600px;
  font-family: ${barlow.style.fontFamily}, sans-serif;
`;
const StyledLabel = styled.label`
  font-size: 1.2rem;
  display: block;
  padding-bottom: 20px;
  font-weight: 500;
`;

const StyledInput = styled.textarea`
  font-family: ${barlow.style.fontFamily}, sans-serif;
  font-size: 1rem;
  width: 100%;
  padding: 5px;
  display: block;
  height: 250px;
  margin-bottom: 30px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledOutput = styled.p`
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 2px;
  width: 100%;
  white-space: pre-wrap;
`;
