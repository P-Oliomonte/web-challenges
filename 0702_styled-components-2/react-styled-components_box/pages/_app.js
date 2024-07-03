import { GlobalStyle } from "../styles";
import "../components/BoxWithClassName/BoxWithClassName.css";
import "../components/BoxWithStyledComponents";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
