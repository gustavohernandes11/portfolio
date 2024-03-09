import type { GetStaticProps, NextPage } from "next";

import Animate from "components/Animate";
import { FixedArrow } from "components/FixedArrow";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { Seo } from "../src/components/Seo";
import { AboutMe } from "../src/sections/AboutMe";
import { Contact } from "../src/sections/Contact";
import { Intro } from "../src/sections/Intro";
import { Projects } from "../src/sections/Projects";
import { Footer } from "sections/Footer";

const Home: NextPage = ({
    data: { name, about, title, projects, meta },
}: any) => {
    return (
        <Main>
            <Seo meta={meta} />
            <Animate type="zoomIn">
                <Header />
            </Animate>
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
