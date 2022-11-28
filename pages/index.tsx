import type { NextPage } from "next";
import React from "react";

import { Seo } from "../src/components/Seo";

import { AboutMeSection } from "../src/sections/AboutMeSection";
import { TechnologiesSection } from "../src/sections/TechnologiesSection";
import { ProjectsSection } from "../src/sections/ProjectsSection";
import { ContactSection } from "../src/sections/ContactSection";

const Home: NextPage = () => {
    return (
        <>
            <Seo />
            <AboutMeSection />
            <TechnologiesSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
};

export default Home;
