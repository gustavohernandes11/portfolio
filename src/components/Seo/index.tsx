import Head from "next/head";

export const Seo = () => {
    return (
        <Head>
            <title>Gustavo Hernandes | Dev</title>
            <meta name="title" content="Gustavo Hernandes | Dev" />
            <meta
                name="description"
                content="Portfolio de um desenvolvedor de sites e sistemas para web."
            />
            <meta
                name="keywords"
                content="Javascript, Css, HTML, React, Typescript, Development, Design, Styled-Components, Nodejs, Node, API, Next, Nextjs"
            />
            <meta name="robots" content="index, follow" />
            <meta
                httpEquiv="Content-Type"
                content="text/html; charset=utf-8"
            />
            <meta name="language" content="Portuguese" />
            <meta name="author" content="Gustavo Hernandes da Silva" />
        </Head>
    );
};
