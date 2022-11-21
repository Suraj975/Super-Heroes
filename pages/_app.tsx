import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className="page-wrap">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default App;
