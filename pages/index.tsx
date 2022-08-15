import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Heading } from "../src/components/Heading";
import { Footer } from "../src/components/Footer";
import { AvatarImage } from "../src/components/AvatarImage";
import { ProjectModal } from "../src/components/ProjectModal";
import { Modal } from "../src/components/Modal";
import { Section } from "../src/components/Section";
import { SocialBar } from "../src/components/SocialBar";
import { Header } from "../src/components/Header";
import { Grid } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Section main={true} alignItems="center" id="first-section">
                <Modal className="neon">
                    <AvatarImage
                        src="https://github.com/null.png"
                        alt="Foto de perfil do autor"
                    />
                    <Heading>Lorem Ipsum!</Heading>
                    <Typography mt={1} mb={1}>
                        Estudante de desenvolvimento web e engenharia.
                    </Typography>
                    <SocialBar />
                </Modal>
            </Section>
            <Section
                id="about-me-section"
                full={true}
                alignItems="center"
                color="#202020"
            >
                <Heading as="h2">About me</Heading>
                <Grid
                    xs={12}
                    container
                    mt={1}
                    justifyContent="center"
                    spacing={4}
                >
                    <Grid
                        xs={12}
                        sm={6}
                        item
                        justifyContent="center"
                        alignItems="center"
                    >
                        <span>
                            <Image
                                layout="responsive"
                                width={300}
                                height={300}
                                src="https://github.com"
                                alt="Need to add something here"
                            />
                        </span>
                    </Grid>
                    <Grid xs={12} sm={6} item justifyContent="center">
                        <Heading as="h3">Lorem ipsum</Heading>
                        <Typography>
                            dolor sit amet consectetur adipisicing elit. Odio
                            animi necessitatibus impedit quis. Consequatur
                            veniam provident recusandae voluptatum non beatae
                            accusamus natus ratione at enim facilis, expedita
                            aut eligendi earum.
                        </Typography>
                        <Heading as="h3">Lorem ipsum</Heading>
                        <Typography>
                            dolor sit amet consectetur adipisicing elit. Odio
                            animi necessitatibus impedit quis. Consequatur
                            veniam provident recusandae voluptatum non beatae
                            accusamus natus ratione at enim facilis, expedita
                            aut eligendi earum.
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
            <Section
                id="projects-section"
                full={true}
                alignItems="center"
                color="#141414"
            >
                <Heading as="h2">Projects</Heading>
                <Grid xs={12} container mt={1} spacing={4}>
                    <ProjectModal
                        projectName="natus ratione at enim facilis, expedita"
                        description="dolor sit amet consectetur adipisicing elit. Odio
                        animi necessitatibus impedit quis. Consequatur
                        veniam provident recusandae voluptatum non beatae
                        accusamus natus ratione at enim facilis, expedita
                        aut eligendi earum."
                        imageSrc="https://github.com/null.png"
                        imageAlt="Alt text =)"
                        githubUrl="none"
                        deployUrl="none"
                    />
                    <ProjectModal
                        projectName="natus ratione at enim facilis, expedita"
                        description="dolor sit amet consectetur adipisicing elit. Odio
                        animi necessitatibus impedit quis. Consequatur
                        veniam provident recusandae voluptatum non beatae
                        accusamus natus ratione at enim facilis, expedita
                        aut eligendi earum."
                        imageSrc="https://github.com/null.png"
                        imageAlt="Alt text =)"
                        githubUrl="none"
                        deployUrl="none"
                    />
                    <ProjectModal
                        projectName="natus ratione at enim facilis, expedita"
                        description="dolor sit amet consectetur adipisicing elit. Odio
                        animi necessitatibus impedit quis. Consequatur
                        veniam provident recusandae voluptatum non beatae
                        accusamus natus ratione at enim facilis, expedita
                        aut eligendi earum."
                        imageSrc="https://github.com/null.png"
                        imageAlt="Alt text =)"
                        githubUrl="none"
                        deployUrl="none"
                    />
                    <ProjectModal
                        projectName="natus ratione at enim facilis, expedita"
                        description="dolor sit amet consectetur adipisicing elit. Odio
                        animi necessitatibus impedit quis. Consequatur
                        veniam provident recusandae voluptatum non beatae
                        accusamus natus ratione at enim facilis, expedita
                        aut eligendi earum."
                        imageSrc="https://github.com/null.png"
                        imageAlt="Alt text =)"
                        githubUrl="none"
                        deployUrl="none"
                    />
                    <ProjectModal
                        projectName="natus ratione at enim facilis, expedita"
                        description="dolor sit amet consectetur adipisicing elit. Odio
                        animi necessitatibus impedit quis. Consequatur
                        veniam provident recusandae voluptatum non beatae
                        accusamus natus ratione at enim facilis, expedita
                        aut eligendi earum."
                        imageSrc="https://github.com/null.png"
                        imageAlt="Alt text =)"
                        githubUrl="none"
                        deployUrl="none"
                    />
                    <ProjectModal
                        projectName="natus ratione at enim facilis, expedita"
                        description="dolor sit amet consectetur adipisicing elit. Odio
                        animi necessitatibus impedit quis. Consequatur
                        veniam provident recusandae voluptatum non beatae
                        accusamus natus ratione at enim facilis, expedita
                        aut eligendi earum."
                        imageSrc="https://github.com/null.png"
                        imageAlt="Alt text =)"
                        githubUrl="none"
                        deployUrl="none"
                    />
                </Grid>
            </Section>
            <Section id="contact-me-section" alignItems="center">
                <Heading as="h2">Contact-me</Heading>
                <Typography>Whatsapp: 017 99656-0749</Typography>
                <Typography>Email: gustavo.hernandes.s11@gmail.com</Typography>
            </Section>
            <Footer />
        </>
    );
};

export default Home;
