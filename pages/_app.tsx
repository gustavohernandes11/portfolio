import type { AppProps } from "next/app";

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import GlobalStyle from "../src/styles/GlobalStyles";

import { theme } from "../src/theme";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <main>
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
