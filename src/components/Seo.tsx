import Head from "next/head";
import React from "react";

type MetaType = {
    meta: {
        title?: string;
        description?: string;
        keywords?: string;
    };
};

export const Seo = ({ meta }: MetaType) => {
    return (
        <Head>
            <title>
                {meta.title || "Gustavo Hernandes da Silva | Portfolio"}
            </title>
            <meta
                name="description"
                content={
                    meta.description ||
                    "Portfolio de um desenvolvedor de sites e sistemas para web."
                }
            />
            <meta
                name="keywords"
                content={
                    meta.keywords ||
                    "Portfolio, Javascript, Css, HTML, React, Typescript, Engenharia de Produção, Projetos, Styled-Components, Nodejs, Node, API, Next, Nextjs"
                }
            />
        </Head>
    );
};
