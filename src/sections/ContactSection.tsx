import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { Typography } from "@mui/material";

export const ContactSection = () => {
    return (
        <Section id="contact-me-section" alignItems="center">
            <Heading as="h2">Contato</Heading>
            <Typography>Whatsapp: 017 99656-0749</Typography>
            <Typography>Email: gustavo.hernandes.s11@gmail.com</Typography>
        </Section>
    );
};
