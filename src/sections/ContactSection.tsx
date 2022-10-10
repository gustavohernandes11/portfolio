import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Typography, Grid } from "@mui/material";
import { Whatsapp } from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/entypo";
import { ContactContainer } from "components/ContactContainer";

export const ContactSection = () => {
    return (
        <Section id="contact-me-section" alignItems="center">
            <Heading as="h2">Contato</Heading>
            <Grid
                container
                direction="row"
                mt={1}
                xs={7}
                justifyContent="center"
            >
            <Typography paragraph textAlign="center">
                Atualmente estou a disposição para te ajudar a construir
                projetos da área. Fique a vontade para entrar em contato comigo.
            </Typography>
                <ContactContainer
                    linkTo="https://wa.me/55017996560749"
                    color="#38832e"
                >
                    <Whatsapp size={25} /> <p>017 99656-0749</p>
                </ContactContainer>
                <ContactContainer>
                    <Email size={25} />
                    <p>gustavo.hernandes.s11@gmail.com</p>
                </ContactContainer>
            </Grid>
        </Section>
    );
};
