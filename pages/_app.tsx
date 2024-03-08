import type { AppProps } from "next/app";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import GlobalStyle from "../src/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />

            <Header />
            <main>
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
}

export default MyApp;
