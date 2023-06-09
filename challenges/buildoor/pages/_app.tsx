import type { AppProps } from "next/app";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import WalletContextProvider from "../components/WalletContextProvider";

const colors = {
  background: "#1f1f1f",
  accent: "#833BBE",
  bodyText: "rgba(255,255,255, 0.75)",
};

const theme = extendTheme({ colors });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
