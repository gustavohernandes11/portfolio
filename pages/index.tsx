import type { GetStaticProps, NextPage } from "next";
import React from "react";

import { Seo } from "../src/components/Seo";
import { Intro } from "../src/sections/Intro";
import { AboutMe } from "../src/sections/AboutMe";
import { Projects } from "../src/sections/Projects";
import { Contact } from "../src/sections/Contact";
import { Main } from "components/Main";

const Home: NextPage = ({
    data: { name, about, title, projects, meta },
}: any) => {
    return (
        <Main>
            <Seo meta={meta} />
            <Intro name={name} title={title} />
            <AboutMe content={about} />
            <Projects projects={projects} />
            <Contact />
        </Main>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const url = `${process.env.PAYLOAD_CMS_URL}/api/globals/portfolio`;
    const data = await fetch(url).then((data) => data.json());
    return {
        props: {
            data,
        },
    };
};
