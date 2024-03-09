import Animate from "components/Animate";
import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import { WrapBetweenArrows } from "components/WrapBetweenArrows";
import styled from "styled-components";
import serialize from "utils/serialize";

type AboutMeType = {
    content: any;
};

export const AboutMe = ({ content }: AboutMeType) => (
    <SectionContainer center>
        <Animate type="slideInLeft">
            <Title id="about">SOBRE</Title>
        </Animate>
        <WrapBetweenArrows>
            <Animate type="slideInLeft">
                <StyledTextContainer>{serialize(content)}</StyledTextContainer>
            </Animate>
        </WrapBetweenArrows>
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
