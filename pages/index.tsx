import type { GetStaticProps, NextPage } from "next";

import { FixedArrow } from "components/FixedArrow";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { AboutMe } from "sections/AboutMe";
import { Footer } from "sections/Footer";
import { Seo } from "../src/components/Seo";
import { Contact } from "../src/sections/Contact";
import { Intro } from "../src/sections/Intro";
import { Projects } from "../src/sections/Projects";
import { MetaType } from "../types/MetaType";
import { ProjectType } from "../types/ProjectType";

type HomeProps = {
    data: {
        name: string;
        about: any;
        title: string;
        projects: ProjectType[];
        meta: MetaType;
    };
};

const Home: NextPage<HomeProps> = ({
    data: { name, about, title, projects, meta },
}) => {
    return (
        <Main>
            <Seo meta={meta} />
            <Header />
            <FixedArrow />
            <Intro name={name} title={title} />
            <AboutMe content={about} />
            <Projects projects={projects} />
            <Contact />
            <Footer />
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
