import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { theme } from "../theme";

function App({ Component, pageProps }: AppProps) {
  const colorModeManager =
    typeof pageProps?.cookies === "string"
      ? //@ts-ignore
        cookieStorageManager(pageProps?.cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <div className="page-wrap">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default App;
