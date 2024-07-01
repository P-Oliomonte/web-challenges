import { createGlobalStyle } from "styled-components";
import { Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${SpaceGrotesk.style.fontFamily}, system-ui;
  }
`;
