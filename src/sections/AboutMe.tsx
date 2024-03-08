import Animate from "components/Animate";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import styled from "styled-components";
import serialize from "utils/serialize";

type AboutMeType = {
    content: any;
};

export const AboutMe = ({ content }: AboutMeType) => (
    <SectionContainer center>
        <Animate type="slideIn">
            <Title id="about">SOBRE</Title>
        </Animate>
        <Animate type="slideIn">
            <StyledTextContainer>{serialize(content)}</StyledTextContainer>
        </Animate>
    </SectionContainer>
);

const StyledTextContainer = styled.div`
    max-width: 40rem;
    text-align: center;
    margin-inline: auto;
    font-size: 1.25rem;

    @media (max-width: 768px) {
        padding-inline: 1rem;
    }
`;
