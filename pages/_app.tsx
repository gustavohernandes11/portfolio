import type { AppProps } from "next/app";

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import GlobalStyle from "../src/styles/GlobalStyles";
import { CogAnimation } from "components/CogAnimation";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />

            <Header />
            <main>
                <CogAnimation />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    );
}

export default MyApp;
