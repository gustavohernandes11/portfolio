import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Chip, ChipWrapper } from "../components/Chip";
import { Typography, Grid } from "@mui/material";

import { Typescript, Html5, Css3, Strapi, Vuedotjs, ReactLogo, Styledcomponents, Nextdotjs, Postgresql, Git, Nodedotjs } from '@styled-icons/simple-icons';

export const AboutMeSection = () => {
    return (
        <Section id="about-me-section" alignItems="center" color="#202020">
            <Grid xs={12} sm={7} container justifyContent="center">
                <Heading as="h2">Sobre</Heading>
                <Typography paragraph>
                    Meu nome é <strong>Gustavo Hernandes</strong>, sou de Suzanápolis - SP, tenho 19 anos e atualmente estou
                    cursando
                    <b> Engenharia de Produção</b> enquanto paralelamente trabalho e estudo tecnologias de
                    <strong> Desenvolvimento Web</strong>.
                </Typography>

                <Heading as="h3">Tecnologias</Heading>
                <ChipWrapper>
                    <Chip label="Typescript/Javascript" icon={<Typescript size={15} />} />
                    <Chip label="Html" icon={<Html5 size={15} />} />
                    <Chip label="Css" icon={<Css3 size={15} />} />
                    <Chip label="React" icon={<ReactLogo size={15} />} />

                    <Chip label="Node" icon={<Nodedotjs size={15} />} />
                    <Chip label="Vue" icon={<Vuedotjs size={15} />} />
                    <Chip label="Next.js" icon={<Nextdotjs size={15} />} />
                    <Chip label="Styled-components" icon={<Styledcomponents size={15} />} />
                    <Chip label="Material Ui" />

                    <Chip label="Strapi" icon={<Strapi size={15} />} />
                    <Chip label="PostgreSQL" icon={<Postgresql size={15} />} />
                    <Chip label="Git/Github" icon={<Git size={15} />} />
                </ChipWrapper>
            </Grid>
        </Section>
    );
};
