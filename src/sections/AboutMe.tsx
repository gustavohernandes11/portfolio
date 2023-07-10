import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import styled from "styled-components";
import serialize from "utils/serialize";

type AboutMeType = {
    // to resolve
    aboutme: any;
};

export const AboutMe = ({ aboutme }: AboutMeType) => {
    return (
        <SectionContainer>
            <Title id="about">SOBRE</Title>
            <StyledTextContainer>{serialize(aboutme)}</StyledTextContainer>
        </SectionContainer>
    );
};

const StyledTextContainer = styled.div`
    max-width: 30rem;
    text-align: center;
    margin-inline: auto;
    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
`;
