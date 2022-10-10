import Head from "next/head";
import React from "react";

export const Seo = () => {
    return (
        <Head>
            <meta name="title" content="Gustavo Hernandes | Dev" />
            <title>Gustavo Hernandes</title>
            <meta
                name="description"
                content="Portfolio de um desenvolvedor de sites e sistemas para web."
            />
            <meta
                name="keywords"
                content="Portfolio, Javascript, Css, HTML, React, Typescript, Development, Design, Styled-Components, Nodejs, Node, API, Next, Nextjs"
            />
            <meta
                property="og:image"
                content="https://user-images.githubusercontent.com/66632840/186479290-6d1c2687-e755-411a-bb67-7b8d0504baf2.png"
            />
        </Head>
    );
};
