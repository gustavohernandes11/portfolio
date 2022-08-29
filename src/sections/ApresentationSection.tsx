import { Section } from "../components/Section";
import { Modal } from "../components/Modal";
import { AvatarImage } from "../components/AvatarImage";
import { Heading } from "../components/Heading";
import { SocialBar } from "../components/SocialBar";
import { Typography } from "@mui/material";

export const ApresentationSection = () => {
    return (
        <Section alignItems="center" id="first-section">
            <Modal>
                <AvatarImage
                    src="https://github.com/gustavohernandes11.png"
                    alt="Foto de perfil do autor"
                />
                <Heading>Gustavo Hernandes</Heading>
                <Typography mt={1} mb={1}>
                    Desenvolvedor Web
                </Typography>
                <SocialBar />
            </Modal>
        </Section>
    );
};
