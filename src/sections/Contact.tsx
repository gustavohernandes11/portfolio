import { ContactForm } from "components/ContactForm";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";

export const Contact = () => {
    return (
        <SectionContainer>
            <Title id="contact">CONTATO</Title>
            <ContactForm />
        </SectionContainer>
    );
};
