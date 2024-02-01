import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import styled from "styled-components";
import serialize from "utils/serialize";

type AboutMeType = {
    content: any;
};

export const AboutMe = ({ content }: AboutMeType) => (
    <SectionContainer>
        <Title id="about">SOBRE</Title>
        <StyledTextContainer>{serialize(content)}</StyledTextContainer>
    </SectionContainer>
);

const StyledTextContainer = styled.div`
    max-width: 30rem;
    text-align: center;
    margin-inline: auto;
    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
`;
