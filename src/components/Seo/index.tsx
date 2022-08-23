import Head from "next/head";
import React from "react";

export const Seo = () => {
    return (
        <Head>
            <meta name="title" content="Gustavo Hernandes | Dev" />
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
                content="../../../public/logo.png "
            />
        </Head>
    );
};
