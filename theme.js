import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
export const styles = {
  global: () => {
    return {
      "html, body": {
        padding: "0px",
        margin: "0px",
        height: "100%",
        color: "white",
        fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        fontSize: "16px",
        backgroundColor: "#0a0a0a",
      },
      ".page-wrap": {
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "0px",
        margin: "0px",
      },
      input: { color: "black" },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      "*": {
        boxSizing: "border-box",
      },
    };
  },
};

export const theme = extendTheme({
  styles,
  config,
});
