import React from "react";
import { Footer } from "../src/components/Footer";

import { Header } from "../src/components/Header";
import { Seo } from "../src/components/Seo";

import { ApresentationSection } from "../src/sections/ApresentationSection";
import { AboutMeSection } from "../src/sections/AboutMeSection";
import { ProjectsSection } from "../src/sections/ProjectsSection";
import { ContactSection } from '../src/sections/ContactSection'


import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <Seo />
            <Header />
            <ApresentationSection />
            <AboutMeSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
