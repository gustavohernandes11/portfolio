import type { NextPage } from "next";
import React from "react";

import { Seo } from "../src/components/Seo";

import { AboutMeSection } from "../src/sections/AboutMeSection";
import { TechnologiesSection } from "../src/sections/TechnologiesSection";
import { ProjectsSection } from "../src/sections/ProjectsSection";
import { ContactSection } from "../src/sections/ContactSection";
import { Container } from "@chakra-ui/react";

const Home: NextPage = () => {
    return (
        <Container
            width="100%"
            maxW="100vw"
            bg="linear-gradient(#141414, #161616);"
            p={0}
        >
            <Seo />
            <AboutMeSection />
            <TechnologiesSection />
            <ProjectsSection />
            <ContactSection />
        </Container>
    );
};

export default Home;
