import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Chip, ChipWrapper } from "../components/Chip";
import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import IllustrationImage from "../assets/imgs/Hot beverage.png";

export const AboutMeSection = () => {
    return (
        <Section id="about-me-section" alignItems="center" color="#202020">
            <Heading as="h2">Sobre</Heading>
            <Grid xs={12} container mt={1} justifyContent="center" spacing={4}>
                <Grid xs={12} sm={5} item justifyContent="center">
                    <Image
                        src={IllustrationImage}
                        alt="Illustration image"
                        width={866}
                        height={683}
                        layout="responsive"
                    />
                </Grid>
                <Grid xs={12} sm={7} item justifyContent="center">
                    <Heading as="h3">Quem sou</Heading>
                    <Typography paragraph>
                        Meu nome é <strong>Gustavo Hernandes</strong>, sou do
                        interior de São Paulo, tenho 19 anos e atualmente estou
                        cursando
                        <b> Engenharia de Produção</b> e paralelamente estudo
                        <strong> Desenvolvimento Web</strong>.
                    </Typography>
                    <Typography paragraph>
                        Meu foco sempre foi a Stack <strong>Frontend</strong>,
                        porém busco aprender linguagens backend como complemento
                        para entender conceitos importantes na produção de um
                        software.
                    </Typography>
                    <Heading as="h3">Tecnologias</Heading>
                    <ChipWrapper>
                        <Chip label="Typescript/Javascript" />
                        <Chip label="Html" />
                        <Chip label="Css" />
                        <Chip label="React" />

                        <Chip label="Node" />
                        <Chip label="Vue" />
                        <Chip label="Next.js" />
                        <Chip label="Styled-components" />
                        <Chip label="Material Ui" />

                        <Chip label="Strapi" />
                        <Chip label="PostgreSQL" />
                        <Chip label="Git/Github" />
                    </ChipWrapper>
                </Grid>
            </Grid>
        </Section>
    );
};
