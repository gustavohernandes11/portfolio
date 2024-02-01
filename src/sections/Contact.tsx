import { ContactForm } from "components/ContactForm";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import styled from "styled-components";

export const Contact = () => (
    <SectionContainer>
        <Title id="contact">CONTATO</Title>
        <SmallContainer>
            <ContactForm />
        </SmallContainer>
    </SectionContainer>
);

const SmallContainer = styled.div`
    max-width: 50rem;
    margin-inline: auto;
    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
`;
